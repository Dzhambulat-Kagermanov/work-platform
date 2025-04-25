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
            
            // Store all messages for pagination
            setAllMessages(sortedMessages);
            
            // Show the most recent messages initially
            if (sortedMessages.length > pageSize) {
                setVisibleMessages(sortedMessages.slice(-pageSize)); // Last 10 messages
            } else {
                setVisibleMessages(sortedMessages); // All messages if fewer than pageSize
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
        
        if (!allMessages || !Array.isArray(allMessages)) {
            return [];
        }
        
        // Find the oldest visible message index
        const oldestVisibleMessageId = visibleMessages[0]?.id;
        const oldestVisibleIndex = allMessages.findIndex(msg => msg.id === oldestVisibleMessageId);
        
        if (oldestVisibleIndex <= 0) {
            // Already showing the oldest messages
            return [];
        }
        
        // Calculate how many more messages we can load
        const startIndex = Math.max(0, oldestVisibleIndex - pageSize);
        const newMessages = allMessages.slice(startIndex, oldestVisibleIndex);
        
        if (newMessages.length === 0) {
            return [];
        }
        
        // Add new messages to the beginning of visible messages
        setVisibleMessages(prev => [...newMessages, ...prev]);
        return newMessages;
    }, [allMessages, visibleMessages, pageSize]);

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
