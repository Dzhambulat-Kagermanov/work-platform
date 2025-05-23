"use client";
import { FC, useEffect } from "react";
import { TChatPlaqueProps, TClassName, TState, TTag } from "@/types";
import { cn } from "@/lib";
import { Typography } from "@/components/ui";
import { ChatAvatarItem } from "../ChatAvatarItem";
import cls from "./index.module.scss";
import { Message, Order } from "@/types/api";
import { chatPusherConfig, pusherClient } from "@/utils/pusher-client";

interface Props extends TClassName, TTag, TChatPlaqueProps {
    isActive: boolean;
    addMessage: (message: Message) => void;
    setIsActive: (id: Order["id"]) => void;
    headCls?: string;
    footerCls?: string;
    contentCls?: string;
}
const ChatItem: FC<Props> = ({
    id,
    avatar,
    productName,
    newMessagesQnt,
    isOnline,
    lastMessage,
    lastOnlineTime,
    className,
    contentCls,
    footerCls,
    headCls,
    isActive,
    setIsActive,
    tag = "div",
    addMessage,
}) => {
    const Tag = tag;

    const handleClick = () => {
        setIsActive(id);
    };

    // EFFECTS
    useEffect(() => {
        if (id) {
            const config = chatPusherConfig({
                userId: id as number,
            });
            const channel = pusherClient.subscribe(config.channel);

            channel.bind(config.event, (data: Message) => {
                addMessage(data);
                console.log("Получены данные:", data);
            });
            return () => {
                channel.unbind(config.event);
                pusherClient.unsubscribe(config.channel);
            };
        }
    }, [id]);

    return (
        <Tag
            className={cn(cls.item, [className], {
                [cls.active]: isActive,
            })}
            onClick={handleClick}
        >
            <ChatAvatarItem
                className={cn(cls.avatar)}
                avatar={avatar}
                isOnline={isOnline}
            />
            <div className={cn(cls.content, [contentCls])}>
                <div className={cn(cls.head, [headCls])}>
                    <Typography font="Inter-SB" size={14} tag="h2">
                        {productName}
                    </Typography>
                    <Typography font="Inter-M" size={14} tag="time">
                        {lastOnlineTime}
                    </Typography>
                </div>
                <div className={cn(cls.footer, [footerCls])}>
                    <Typography font="Inter-R" size={14} tag="h3">
                        {lastMessage ||
                            "Enter your message description here ..."}
                    </Typography>
                    {newMessagesQnt ? (
                        <Typography font="Inter-SB" size={12}>
                            {newMessagesQnt}
                        </Typography>
                    ) : null}
                </div>
            </div>
        </Tag>
    );
};

export { ChatItem };
