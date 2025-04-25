import { FC, useMemo } from "react";
import { Message } from "@/types/api";
import { cn } from "@/lib";
import { Typography } from "@/components/ui";
import cls from "./index.module.scss";
import { TClassName } from "@/types";
import { ChatMessageItem } from "@/components/entities/ChatMessageItem";
import React from "react";
import { dateParserHandler } from "@/handlers";
import { useSessionQuery } from "@/hooks/api/auth";
import {
    buyerAvatarSelector,
    salesmanAvatarSelector,
    useChat,
} from "@/store/useChat";

interface Props extends TClassName {
    date: string;
    messages: Message[];
    userIsOnline: boolean;
}
const MessagesAreaGroup: FC<Props> = ({
    date,
    className,
    messages,
    userIsOnline,
}) => {
    // Sort messages chronologically within each date group and remove duplicates
    const sortedMessages = useMemo(() => {
        if (!Array.isArray(messages)) return [];
        
        // Use a map to track message IDs to remove duplicates
        const uniqueMessages = new Map();
        
        // Keep only one copy of each message based on ID
        messages.forEach(msg => {
            if (msg.id && !uniqueMessages.has(msg.id)) {
                uniqueMessages.set(msg.id, msg);
            }
        });
        
        // Convert back to array and sort chronologically
        return [...uniqueMessages.values()].sort((a, b) => {
            const timeA = new Date(a.created_at || a.updated_at || 0).getTime();
            const timeB = new Date(b.created_at || b.updated_at || 0).getTime();
            return timeA - timeB; // Ascending order - oldest first
        });
    }, [messages]);

    const { data: userData } = useSessionQuery();
    const role = userData?.role.slug;

    const buyerAvatar = useChat(buyerAvatarSelector);
    const salesmanAvatar = useChat(salesmanAvatarSelector);

    return (
        <div className={cn(cls.wrapper, [className])}>
            <Typography
                font="Inter-SB"
                tag="time"
                size={14}
                className={cn(cls.date)}
            >
                {date}
            </Typography>
            <ul className={cn(cls.group)}>
                {sortedMessages.map((message) => {
                    return (
                        <ChatMessageItem
                            key={message.id}
                            whoReading={role === "buyer" ? "reading-user" : "reading-salesman"}
                            tag="li"
                            id={message.id}
                            avatar={message.whoSend !== "buyer" ? buyerAvatar || "" : salesmanAvatar || ""}
                            className={cn(cls.item)}
                            message={message.text || ""}
                            messageCls={cn(cls.item_message)}
                            messageGotTime={dateParserHandler(message.created_at || "")}
                            name=""
                            isOnline={false}
                            whomSend={message.whoSend === "buyer" ? "salesman" : "user"}
                        />
                    );
                })}
            </ul>
        </div>
    );
};

export { MessagesAreaGroup };
