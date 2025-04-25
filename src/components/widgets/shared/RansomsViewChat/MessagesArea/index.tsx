"use client";
import { FC, useEffect, useRef, useState, useCallback } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import Image from "next/image";
import { Typography } from "@/components/ui";
import { RansomsViewNotification } from "../../RansomsViewNotification";
import { MessagesAreaGroup } from "../MessagesAreaGroup";
import { RansomsReviewModal } from "../../RansomsReviewModal";
import cls from "./index.module.scss";
import { Message } from "@/types/api";
import { dateParserHandler } from "@/handlers";
import Chat from "@/types/api/Chat";
import { TRole } from "..";
import { PageLoader } from "@/components/ui/loaders";

// Helper function to convert Russian date to timestamp for proper sorting
function getTimestampFromRussianDate(russianDate: string): number {
    // First check if it's a date with year like "25.04.2025"
    if (russianDate.includes('.')) {
        const parts = russianDate.split('.');
        if (parts.length === 3) {
            const day = parseInt(parts[0], 10);
            const month = parseInt(parts[1], 10) - 1; // JS months are 0-indexed
            const year = parseInt(parts[2], 10);
            return new Date(year, month, day).getTime();
        }
    }
    
    // Otherwise parse a Russian formatted date like "25 апреля 2025"
    const parts = russianDate.split(' ');
    if (parts.length < 2) return 0;
    
    const day = parseInt(parts[0], 10);
    const monthNames = {
        'января': 0, // January
        'февраля': 1, // February
        'марта': 2, // March
        'апреля': 3, // April
        'мая': 4, // May
        'июня': 5, // June
        'июля': 6, // July
        'августа': 7, // August
        'сентября': 8, // September
        'октября': 9, // October
        'ноября': 10, // November
        'декабря': 11 // December
    };
    
    const month = monthNames[parts[1] as keyof typeof monthNames] || 0;
    const year = parts.length > 2 ? parseInt(parts[2], 10) : new Date().getFullYear();
    
    return new Date(year, month, day).getTime();
}

interface Props extends TClassName {
    messages: Message[];
    status: Chat["status"];
    role: TRole;
    // Optional pagination props
    fetchMoreMessages?: () => Promise<Message[]>;
    pageSize?: number;
}

const MessagesArea: FC<Props> = ({ className, messages: initialMessages, status, role, fetchMoreMessages, pageSize = 10 }) => {
    // State for pagination
    const [messages, setMessages] = useState<Message[]>(initialMessages || []);
    const [isLoading, setIsLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [isFirstLoad, setIsFirstLoad] = useState(true);
    
    // Create references
    const observerRef = useRef<IntersectionObserver | null>(null);
    const loadTriggerRef = useRef<HTMLDivElement | null>(null);
    const notificationRef = useRef<HTMLDivElement>(null);
    const groupOverlayRef = useRef<HTMLDivElement>(null);
    
    // State for message groups
    const [messagesGroup, setMessagesGroup] = useState<Array<{ date: string; messages: Message[] }>>([]);

    // Function to load more messages when scrolling up
    const loadMoreMessages = useCallback(async () => {
        if (!fetchMoreMessages || isLoading || !hasMore) return;
        
        try {
            setIsLoading(true);
            console.log('Loading more messages...');
            
            const olderMessages = await fetchMoreMessages();
            
            if (!olderMessages || olderMessages.length === 0) {
                setHasMore(false);
            } else {
                // Prepend older messages to the current messages
                setMessages(prev => [...olderMessages, ...prev]);
            }
        } catch (error) {
            console.error('Error loading more messages:', error);
        } finally {
            setIsLoading(false);
        }
    }, [fetchMoreMessages, isLoading, hasMore]);

    // Initialize the intersection observer
    useEffect(() => {
        const options = {
            root: groupOverlayRef.current,
            rootMargin: '0px',
            threshold: 0.1,
        };

        const callback: IntersectionObserverCallback = (entries) => {
            // If the load trigger is visible and we're not already loading
            if (entries[0].isIntersecting && !isLoading && hasMore) {
                loadMoreMessages();
            }
        };

        observerRef.current = new IntersectionObserver(callback, options);

        // Start observing the load trigger element
        if (loadTriggerRef.current) {
            observerRef.current.observe(loadTriggerRef.current);
        }

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, [loadMoreMessages, isLoading, hasMore]);

    // Update messages when initialMessages change
    useEffect(() => {
        setMessages(initialMessages || []);
        setIsFirstLoad(true);
        setHasMore(true);
    }, [initialMessages]);

    // Set initial padding for notification
    useEffect(() => {
        setTimeout(() => {
            if (groupOverlayRef.current && notificationRef.current) {
                groupOverlayRef.current.style.paddingTop = `${
                    notificationRef.current.offsetHeight + 20
                }px`;
            }
        }, 0);
    }, []);

    // Update messages when initialMessages changes
    useEffect(() => {
        if (initialMessages?.length) {
            if (isFirstLoad) {
                setMessages(initialMessages);
            } else {
                // Make sure messages is an array before using map
                if (Array.isArray(messages) && messages.length > 0) {
                    // Keep existing messages and add new ones
                    const existingIds = new Set(messages.map(msg => msg.id));
                    const newMessages = initialMessages.filter(msg => !existingIds.has(msg.id));
                    
                    if (newMessages.length > 0) {
                        setMessages(prev => [...prev, ...newMessages]);
                    }
                } else {
                    // If messages is not a valid array, just set it to initialMessages
                    setMessages(initialMessages);
                }
            }
        }
        
        setIsFirstLoad(false);
    }, [initialMessages, isFirstLoad]);

    // Group messages by date whenever messages change
    useEffect(() => {
        if (!Array.isArray(messages) || messages.length === 0) {
            setMessagesGroup([]);
            return;
        }

        // First, make a copy of messages and sort them chronologically
        const sortedMessages = [...messages].sort((a, b) => {
            const timeA = new Date(a.created_at || a.updated_at || 0).getTime();
            const timeB = new Date(b.created_at || b.updated_at || 0).getTime();
            return timeA - timeB; // Oldest first (ascending order)
        });
        
        // Group by date
        const dateGroups: Record<string, Message[]> = {};
        
        // Process each message
        sortedMessages.forEach(message => {
            if (!message || !message.created_at) return;
            
            // Format the date for grouping (e.g., '25 апреля' or '25.04.2025')
            const dateString = dateParserHandler(message.created_at).split(',')[0];
            
            // Initialize group if it doesn't exist
            if (!dateGroups[dateString]) {
                dateGroups[dateString] = [];
            }
            
            // Add message to its date group
            dateGroups[dateString].push(message);
        });
        
        // Get all unique dates
        const allDates = Object.keys(dateGroups);
        
        // Sort dates chronologically
        allDates.sort((a, b) => {
            const timestampA = getTimestampFromRussianDate(a);
            const timestampB = getTimestampFromRussianDate(b);
            return timestampA - timestampB; // Oldest date first
        });
        
        // Create the final sorted array of date groups
        const result = allDates.map(date => ({
            date,
            messages: dateGroups[date]
        }));
        
        console.log('Sorted date groups:', result.map(item => item.date));
        setMessagesGroup(result);
    }, [messages]);

    // Scroll to bottom on first load
    useEffect(() => {
        if (isFirstLoad && groupOverlayRef.current && messages.length > 0) {
            groupOverlayRef.current.scrollTop = groupOverlayRef.current.scrollHeight;
            setIsFirstLoad(false);
        }
    }, [isFirstLoad, messages]);

    return (
        <div className={cn(cls.wrapper, [className])}>
            {messagesGroup.length ? (
                <>
                    <RansomsViewNotification
                        status={status}
                        className={cn(cls.notification)}
                        //@ts-ignore
                        ref={notificationRef}
                    />
                    <div className={cn(cls.messages_group_overlay)}>
                        <div
                            className={cn(cls.messages_group_wrapper)}
                            ref={groupOverlayRef}
                        >
                            {/* Loading indicator for pagination */}
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

                            {/* Display message groups in chronological order (oldest to newest) */}
                            {messagesGroup.map((item, index) => (
                                <MessagesAreaGroup
                                    className={cn(cls.messages_group)}
                                    userIsOnline={false}
                                    date={item.date}
                                    messages={item.messages}
                                    key={index}
                                />
                            ))}
                        </div>
                    </div>
                    <RansomsReviewModal className={cn(cls.review_modal)} />
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
