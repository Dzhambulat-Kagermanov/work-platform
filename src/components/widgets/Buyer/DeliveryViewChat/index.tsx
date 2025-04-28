import { FC, useState, useEffect } from "react";
import { TClassName, TState } from "@/types";
import { cn } from "@/lib";
import { ActionsArea } from "./ActionsArea";
import { MessagesArea } from "./MessagesArea";
import { HeadArea } from "./HeadArea";
import cls from "./index.module.scss";
import { Message, RoleSlug, BoolNumber, Order } from "@/types/api";
import { EnChatStatuses } from "@/types/api/Chat";

interface Props extends TClassName {
    setActiveSTUB: TState<number | undefined>;
}
const DeliveryViewChat: FC<Props> = ({ className, setActiveSTUB }) => {
    // Mock initial messages (start with fewer messages to demonstrate pagination)
    const [initialMessages, setInitialMessages] = useState<Message[]>([]);
    
    // Моковые данные заказа с полем created_at
    const [orderData, setOrderData] = useState<Order>({
        id: 123,
        ads_id: 456,
        price: 1000,
        has_review_by_buyer: 0 as BoolNumber,
        has_review_by_seller: 0 as BoolNumber,
        is_archived: 0 as BoolNumber,
        status: EnChatStatuses.pending,
        messages: [],
        ad: {} as any,
        whoSend: 'seller',
        created_at: new Date(Date.now() - 600000).toISOString(), // 10 минут назад
        updated_at: new Date().toISOString()
    });
    
    // Mock data for demonstration purposes
    useEffect(() => {
        // Create 15 mock messages (we'll only show the most recent 5 initially)
        const mockMessages: Message[] = Array.from({ length: 15 }, (_, i) => ({
            id: 15 - i, // ID in reverse order so newest messages have highest IDs
            text: `Это тестовое сообщение ${15 - i}`,
            sender_id: i % 2 === 0 ? 1 : 2, // Alternate between user and salesman
            created_at: new Date(Date.now() - (i * 3600000)).toISOString(), // Each message 1 hour apart
            updated_at: new Date(Date.now() - (i * 3600000)).toISOString(),
            whoSend: i % 2 === 0 ? "buyer" as RoleSlug : "seller" as RoleSlug,
            type: "text",
            is_read: 1 as BoolNumber,
            system_type: null,
            color: ""
        }));
        
        // Set only the 5 most recent messages initially
        setInitialMessages(mockMessages.slice(0, 5));
    }, []);
    
    // Mock function to fetch more messages when scrolling up
    const fetchMoreMessages = async (page: number, pageSize: number = 10): Promise<Message[]> => {
        // This simulates an API call that fetches older messages
        console.log(`Fetching page ${page} with pageSize ${pageSize}`);
        
        // Create mock messages for pagination
        const startIndex = 5 + ((page - 1) * pageSize);
        const endIndex = Math.min(startIndex + pageSize, 15);
        
        if (startIndex >= 15) {
            return []; // No more messages
        }
        
        // Mock older messages
        const olderMessages: Message[] = Array.from({ length: endIndex - startIndex }, (_, i) => ({
            id: 15 - (startIndex + i), // IDs in reverse order
            text: `Это более старое сообщение ${15 - (startIndex + i)}`,
            sender_id: (startIndex + i) % 2 === 0 ? 1 : 2,
            created_at: new Date(Date.now() - ((startIndex + i) * 3600000)).toISOString(),
            updated_at: new Date(Date.now() - ((startIndex + i) * 3600000)).toISOString(),
            whoSend: (startIndex + i) % 2 === 0 ? "buyer" as RoleSlug : "seller" as RoleSlug,
            type: "text",
            is_read: 1 as BoolNumber,
            system_type: null,
            color: ""
        }));
        
        return olderMessages;
    };
    return (
        <section className={cn(cls.wrapper, [className])}>
            <HeadArea className={cn(cls.head)} setActiveSTUB={setActiveSTUB} />
            <MessagesArea 
                className={cn(cls.messages)} 
                messages={initialMessages}
                fetchMoreMessages={fetchMoreMessages}
                pageSize={5} // Load 5 messages at a time to make pagination more obvious
                chatId="demo-chat"
                orderData={orderData}
            />
            <ActionsArea className={cn(cls.actions)} />
        </section>
    );
};

export { DeliveryViewChat };
