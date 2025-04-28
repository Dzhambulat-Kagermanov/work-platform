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
import { Message, Order } from "@/types/api";
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
    // ID активного чата для отслеживания изменений
    activeId?: number;
    // Полные данные заказа для расчета времени ожидания
    orderData?: Order;
}

const MessagesArea: FC<Props> = ({ className, messages: initialMessages, status, role, fetchMoreMessages, pageSize = 10, activeId, orderData }) => {
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
    
    // Use a ref to keep track of message IDs we've already seen to prevent duplicates
    const processedMessageIds = useRef<Set<number | string>>(new Set());
    
    // ID последнего активного чата для отслеживания изменений
    const lastActiveIdRef = useRef<number | undefined>(activeId);
    
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

    // Сброс обработанных сообщений при смене активного чата
    useEffect(() => {
        // Если активный ID изменился
        if (activeId !== lastActiveIdRef.current) {
            console.log(`ActiveId changed from ${lastActiveIdRef.current} to ${activeId} - resetting messages`);
            // Сбрасываем состояние сообщений
            setMessages([]);
            // Очищаем набор обработанных ID
            processedMessageIds.current.clear();
            // Обновляем ссылку на последний активный ID
            lastActiveIdRef.current = activeId;
            // Сбрасываем флаг первой загрузки, чтобы скролл пошел вниз
            setIsFirstLoad(true);
        }
    }, [activeId]);

    // Update messages when initialMessages change
    useEffect(() => {
        console.log('initialMessages изменились:', initialMessages?.length, 'сообщений');
        
        // Если initialMessages пусты или не массив, очищаем состояние
        if (!initialMessages || !Array.isArray(initialMessages)) {
            console.log('Нет входящих сообщений, очищаем состояние');
            setMessages([]);
            processedMessageIds.current.clear();
            return;
        }
        
        // При изменении активного чата, полностью перезаписываем сообщения
        if (activeId !== lastActiveIdRef.current) {
            console.log('Активный чат изменился, полная замена сообщений');
            setMessages(initialMessages);
            
            // Очищаем и обновляем обработанные ID
            processedMessageIds.current.clear();
            initialMessages.forEach(msg => {
                if (msg.id) processedMessageIds.current.add(msg.id);
            });
            
            return;
        }
        
        // Проверка на новые сообщения (отправленные пользователем или полученные)
        if (initialMessages.length > 0) {
            console.log('Обрабатываем новые сообщения');
            
            // Проверяем, если кол-во initialMessages совпадает или меньше текущих сообщений в чате,
            // но они могут быть разные - полностью заменяем сообщения
            if (initialMessages.length <= messages.length && !deepEqual(initialMessages, messages)) {
                console.log('Обновлены существующие сообщения, заменяем всё');
                setMessages(initialMessages);
                processedMessageIds.current.clear();
                initialMessages.forEach(msg => {
                    if (msg.id) processedMessageIds.current.add(msg.id);
                });
                return;
            }
            
            // Находим только новые сообщения, которых ещё нет
            const currentIds = new Set(messages.map(msg => msg.id));
            const newMessages = initialMessages.filter(msg => !currentIds.has(msg.id));
            
            if (newMessages.length > 0) {
                console.log(`Добавляем ${newMessages.length} новых сообщений к существующим`);
                setMessages(prev => [...prev, ...newMessages]);
                // Добавляем новые ID в обработанные
                newMessages.forEach(msg => {
                    if (msg.id) processedMessageIds.current.add(msg.id);
                });
            } else if (messages.length === 0) {
                console.log('У нас нет сообщений, но они пришли - используем все');
                setMessages(initialMessages);
                initialMessages.forEach(msg => {
                    if (msg.id) processedMessageIds.current.add(msg.id);
                });
            }
        }
        
        // Устанавливаем флаг первой загрузки и возможности подгрузить больше
        setIsFirstLoad(messages.length === 0);
        setHasMore(true);
    }, [initialMessages, activeId, messages]);
    
    // Вспомогательная функция для глубокого сравнения массивов сообщений
    function deepEqual(arr1: Message[], arr2: Message[]): boolean {
        if (arr1.length !== arr2.length) return false;
        
        // Сравниваем элементы по id
        const arr1Ids = arr1.map(item => item.id).sort().join(',');
        const arr2Ids = arr2.map(item => item.id).sort().join(',');
        
        return arr1Ids === arr2Ids;
    }

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

    // Этот эффект удалён, так как его функциональность объединена с предыдущим эффектом

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
            {isLoading && !messages.length ? (
                // Показываем индикатор загрузки только во время первой загрузки
                <div className={cn(cls.loading)}>
                    <PageLoader className="w-full h-full" />
                </div>
            ) : activeId && orderData ? (
                // Если активный ID и данные заказа есть, показываем чат
                <>
                    <RansomsViewNotification
                        status={status}
                        orderData={orderData}
                        className={cn(cls.notification)}
                        //@ts-ignore
                        ref={notificationRef}
                    />
                    <div className={cn(cls.messages_group_overlay)}>
                        <div
                            className={cn(cls.messages_group_wrapper)}
                            ref={groupOverlayRef}
                        >
                            <div ref={loadTriggerRef} className={cls.load_more_trigger}>
                                {isLoading && <div className={cls.loader} />}
                            </div>
                            <div className={cn(cls.messages_wrapper)}>
                                {Array.isArray(messages) && messages.length > 0 ? (
                                    // Отображаем группы сообщений, если они есть
                                    messagesGroup.map((group, index) => (
                                        <MessagesAreaGroup
                                            className={cn(cls.messages_group)}
                                            userIsOnline={false}
                                            date={group.date}
                                            messages={group.messages}
                                            key={index}
                                        />
                                    ))
                                ) : (
                                    // Если нет сообщений, но чат активен, показываем сообщение о пустом чате
                                    <div className={cn(cls.no_messages)}>
                                        <Typography font="Inter-M" size={16}>
                                            В этом чате пока нет сообщений
                                        </Typography>
                                        <Typography font="Inter-R" size={14} className="text-gray-500 mt-2">
                                            Отправьте сообщение, чтобы начать общение
                                        </Typography>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <RansomsReviewModal className={cn(cls.review_modal)} />
                </>
            ) : (
                // Если нет активного ID или данных заказа, показываем сообщение о выборе заказа
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
