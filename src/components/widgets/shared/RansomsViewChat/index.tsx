import { FC, useState, useEffect, useCallback } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { ActionsArea } from "./ActionsArea";
import { MessagesArea } from "./MessagesArea";
import { HeadArea } from "./HeadArea";
import cls from "./index.module.scss";
import { PageLoader } from "@/components/ui/loaders";
import { PageErrorStub } from "@/components/ui/page-error-stub";
import { Message, Order } from "@/types/api";
import { ImageSendArea } from "./ImageSendArea";

export type TRole = "salesman" | "buyer";

interface Props extends TClassName {
    setActiveId: (id: Order["id"] | undefined) => void;
    activeId?: number;
    chatData?: Order;
    isLoading?: boolean;
    role: TRole;
}

const RansomsViewChat: FC<Props> = ({
    className,
    setActiveId,
    activeId,
    chatData,
    isLoading,
    role,
}) => {
    // State to store all messages and visible messages for pagination
    const [allMessages, setAllMessages] = useState<Message[]>([]);
    const [visibleMessages, setVisibleMessages] = useState<Message[]>([]);
    const [hasMore, setHasMore] = useState(true); // State to track if there are more messages to load
    const pageSize = 10; // Number of messages to load per page

    // Sort messages by date and initialize the visible messages
    useEffect(() => {
        if (chatData?.messages && Array.isArray(chatData.messages)) {
            // Make a deep copy of messages and sort them by date
            const sortedMessages = [...chatData.messages].sort((a, b) => {
                const timeA = new Date(a.created_at || a.updated_at || 0).getTime();
                const timeB = new Date(b.created_at || b.updated_at || 0).getTime();
                return timeA - timeB; // Oldest first (ascending order)
            });
            
            // Всегда показываем только последние pageSize сообщений при первой загрузке
            // Остальные сообщения будут загружаться при скролле
            if (sortedMessages.length > pageSize) {
                // Сохраняем только последние pageSize сообщений в видимых
                setVisibleMessages(sortedMessages.slice(-pageSize)); // Последние 10 сообщений
                // А в allMessages сохраняем только более старые сообщения (кроме последних pageSize)
                setAllMessages(sortedMessages.slice(0, -pageSize));
            } else {
                // Если всего сообщений меньше чем pageSize, показываем их все
                setVisibleMessages(sortedMessages);
                setAllMessages([]); // Нет сообщений для подгрузки
            }
        } else {
            setAllMessages([]);
            setVisibleMessages([]);
        }
    }, [chatData?.messages, pageSize]);

    // Function to fetch more (older) messages when scrolling up
    const fetchMoreMessages = useCallback(async () => {
        console.log(`Fetching more messages`);
        
        // Simulate loading delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        if (!allMessages || !Array.isArray(allMessages) || allMessages.length === 0) {
            setHasMore(false);
            return [];
        }
        
        // Определяем, сколько сообщений загрузить
        const batchSize = Math.min(pageSize, allMessages.length);
        
        // Берем последнюю порцию сообщений из allMessages (они самые старые из тех, что остались)
        const messagesToLoad = allMessages.slice(-batchSize);
        
        if (messagesToLoad.length === 0) {
            setHasMore(false);
            return [];
        }
        
        // Убираем загруженные сообщения из allMessages
        setAllMessages(prev => prev.slice(0, -batchSize));
        
        // Добавляем загруженные сообщения в начало списка видимых сообщений
        setVisibleMessages(prev => [...messagesToLoad, ...prev]);
        
        return messagesToLoad;
    }, [allMessages, pageSize]);

    return (
        <section className={cn(cls.wrapper, [className])}>
            {chatData ? (
                <>
                    <HeadArea
                        role={role}
                        className={cn(cls.head)}
                        orderInfo={chatData}
                        setActiveId={setActiveId}
                    />
                    <MessagesArea
                        role={role}
                        status={chatData.status}
                        messages={visibleMessages}
                        className={cn(cls.messages)}
                        fetchMoreMessages={fetchMoreMessages}
                        pageSize={pageSize}
                        activeId={activeId}
                    />
                    <ImageSendArea role={role} />
                    <ActionsArea
                        role={role}
                        className={cn(cls.actions)}
                        activeId={activeId}
                    />
                </>
            ) : isLoading ? (
                <PageLoader className="w-full h-full" />
            ) : (
                <PageErrorStub
                    className="w-full"
                    text={
                        !activeId ? "Чат не выбран" : "Не удалось загрузить чат"
                    }
                />
            )}
        </section>
    );
};

export { RansomsViewChat };
