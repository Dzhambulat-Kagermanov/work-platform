"use client";
import { FC, useEffect, useRef, useState, useCallback } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import Image from "next/image";
import { Typography } from "@/components/ui";
import { DeliveryViewNotification } from "../../DeliveryViewNotification";
import { MessagesAreaGroup } from "../MessagesAreaGroup";
import { SALESMAN_IS_ONLINE } from "../constants/messages";
import { DeliveryReviewModal } from "../../DeliveryReviewModal";
import cls from "./index.module.scss";
import { Message, Order } from "@/types/api";
import { PageLoader } from "@/components/ui/loaders";
import { TViewChatMessageGroupProps } from "@/types/buyer/chat";

interface Props extends TClassName {
    messages: Message[];
    fetchMoreMessages?: (page: number, pageSize?: number) => Promise<Message[]>;
    chatId?: string;
    pageSize?: number; // Number of messages to load per page
    orderData?: Order; // Данные заказа для расчета времени ожидания
}
const MessagesArea: FC<Props> = ({ className, messages: initialMessages, fetchMoreMessages, chatId, pageSize = 10, orderData }) => {
    const [messages, setMessages] = useState<Message[]>(initialMessages || []);
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [isFirstLoad, setIsFirstLoad] = useState(true);
    
    const notificationRef = useRef<HTMLDivElement>(null);
    const groupOverlayRef = useRef<HTMLDivElement>(null);
    const observerRef = useRef<IntersectionObserver | null>(null);
    const loadTriggerRef = useRef<HTMLDivElement>(null);
    
    // Convert API messages to view model format
    const transformMessagesToViewModel = (apiMessages: Message[]): TViewChatMessageGroupProps[] => {
        // Group messages by date
        const groupedByDate: Record<string, any[]> = {};
        
        apiMessages.forEach((message) => {
            const date = new Date(message.created_at || message.updated_at || Date.now())
                .toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' });
            
            if (!groupedByDate[date]) {
                groupedByDate[date] = [];
            }
            
            // Determine message type and format based on API message structure
            // For this example we're assuming only text messages with is_my field
            // to determine if it's from user or salesman
            if (message.text) {
                // Check if the message is from the current user
                // Using sender_id or any other available property to determine if the message is from the current user
                const isMine = message.sender_id === 1; // Adjust the sender_id based on your auth system
                
                groupedByDate[date].push({
                    type: isMine ? "user" : "salesman",
                    message: {
                        id: message.id,
                        avatar: "/images/stub/avatar.png", // Use a default avatar or get it from another source
                        message: message.text,
                        messageGotTime: new Date(message.created_at || message.updated_at || "")
                            .toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
                        name: isMine ? "Вы" : "Продавец" // Adjust names accordingly
                    }
                });
            }
            // Add other message types as needed (system messages, etc.)
        });
        
        // Convert to array format expected by MessagesAreaGroup
        return Object.entries(groupedByDate).map(([date, messages]) => ({
            date,
            messages
        }));
    };
    
    // Generate message groups from current messages
    const messageGroups = transformMessagesToViewModel(messages);
    
    // Sort message groups with oldest at the top
    messageGroups.sort((a, b) => {
        const dateA = new Date(a.date.split(' ')[0]).getTime();
        const dateB = new Date(b.date.split(' ')[0]).getTime();
        return dateA - dateB; // Ascending order (oldest first)
    });
    
    const loadMoreMessages = useCallback(async () => {
        if (!fetchMoreMessages || isLoading || !hasMore) return;
        
        try {
            setIsLoading(true);
            const nextPage = page + 1;
            
            // Add a small delay to make the loading more noticeable during testing
            await new Promise(resolve => setTimeout(resolve, 500));
            
            const olderMessages = await fetchMoreMessages(nextPage, pageSize);
            
            if (olderMessages.length === 0) {
                setHasMore(false);
            } else {
                setMessages(prev => [...olderMessages, ...prev]); // Prepend older messages
                setPage(nextPage);
                
                // Show a notification when new messages are loaded
                console.log(`Loaded ${olderMessages.length} older messages`);
            }
        } catch (error) {
            console.error('Error loading more messages:', error);
        } finally {
            setIsLoading(false);
        }
    }, [fetchMoreMessages, isLoading, hasMore, page, pageSize]);
    
    // Setup intersection observer for infinite scroll
    useEffect(() => {
        if (!fetchMoreMessages) return;
        
        const options = {
            root: groupOverlayRef.current,
            rootMargin: '0px',
            threshold: 0.1
        };
        
        const observer = new IntersectionObserver((entries) => {
            const [entry] = entries;
            if (entry.isIntersecting && !isLoading && hasMore) {
                loadMoreMessages();
            }
        }, options);
        
        observerRef.current = observer;
        
        const triggerEl = loadTriggerRef.current;
        if (triggerEl) {
            observer.observe(triggerEl);
        }
        
        return () => {
            if (triggerEl && observerRef.current) {
                observerRef.current.unobserve(triggerEl);
            }
        };
    }, [loadMoreMessages, isLoading, hasMore]);
    
    // Set initial padding
    useEffect(() => {
        if (groupOverlayRef.current && notificationRef.current) {
            groupOverlayRef.current.style.paddingTop = `${
                notificationRef.current.offsetHeight + 10
            }px`;
        }
        
        // Update messages when initialMessages changes (e.g., when a new message arrives)
        if (initialMessages?.length && !isFirstLoad) {
            // Keep existing messages and append new ones from initialMessages that don't exist yet
            const existingIds = new Set(messages.map(msg => msg.id));
            const newMessages = initialMessages.filter(msg => !existingIds.has(msg.id));
            
            if (newMessages.length > 0) {
                setMessages(prev => [...prev, ...newMessages]);
            }
        }
        
        setIsFirstLoad(false);
    }, [initialMessages, isFirstLoad]);
    
    // Scroll to bottom on first load
    useEffect(() => {
        if (isFirstLoad && groupOverlayRef.current && messages.length > 0) {
            groupOverlayRef.current.scrollTop = groupOverlayRef.current.scrollHeight;
        }
    }, [isFirstLoad, messages]);

    return (
        <div className={cn(cls.wrapper, [className])}>
            {messages.length ? (
                <>
                    <DeliveryViewNotification
                        className={cn(cls.notification)}
                        orderData={orderData}
                        notificationType="waitingOrder"
                        //@ts-ignore
                        ref={notificationRef}
                    />
                    <div
                        className={cn(cls.messages_group_overlay)}
                        ref={groupOverlayRef}
                    >
                        {/* Loading indicator at the top for older messages */}
                        {isLoading && (
                            <div className={cn(cls.loading_indicator)}>
                                <Typography font="Inter-SB" size={14} className="mr-2">
                                    Загрузка предыдущих сообщений...
                                </Typography>
                                <PageLoader className="h-8" />
                            </div>
                        )}
                        
                        {/* Trigger element for intersection observer */}
                        <div ref={loadTriggerRef} className={cn(cls.load_trigger)}></div>
                        
                        <div className={cn(cls.messages_group_wrapper)}>
                            {messageGroups.map(({ date, messages }) => {
                                return (
                                    <MessagesAreaGroup
                                        className={cn(cls.messages_group)}
                                        salesmanIsOnline={SALESMAN_IS_ONLINE}
                                        date={date}
                                        messages={messages}
                                        key={date}
                                    />
                                );
                            })}
                        </div>
                    </div>
                    <DeliveryReviewModal className={cn(cls.review_modal)} />
                </>
            ) : (
                <div className={cn(cls.empty)}>
                    <Image
                        src={"/images/delivery/chat.svg"}
                        alt="Нет сообщений"
                        width={56}
                        height={56}
                    />
                    <Typography font="Inter-M" size={18}>
                        У вас пока нет активных заказов
                    </Typography>
                </div>
            )}
        </div>
    );
};

export { MessagesArea };
