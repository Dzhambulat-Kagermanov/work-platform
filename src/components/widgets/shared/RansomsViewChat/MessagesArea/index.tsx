"use client";
import { FC, useEffect, useRef, useState } from "react";
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

interface Props extends TClassName {
    messages: Message[];
    status: Chat["status"];
    role: TRole;
}
const MessagesArea: FC<Props> = ({ className, messages, status, role }) => {
    const [messagesGroup, setMessagesGroup] = useState<
        { date: string; messages: Message[] }[]
    >([]);
    console.log(messages);

    const notificationRef = useRef<HTMLDivElement>(null);
    const groupOverlayRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setTimeout(() => {
            if (groupOverlayRef.current && notificationRef.current) {
                groupOverlayRef.current.style.paddingTop = `${
                    notificationRef.current.offsetHeight + 10
                }px`;
            }
        }, 0);
    }, []);

    useEffect(() => {
        if (messages) {
            const result: { [key: string]: Message[] } = {};

            for (let i = 0; i < messages.length; i++) {
                const message = messages[i];

                const date = dateParserHandler(message.created_at);

                if (result[date]) {
                    result[date].push(message);
                    continue;
                }

                result[date] = [message];
            }

            const items = Object.entries(result).map((el) => {
                return {
                    date: el[0],
                    messages: el[1],
                };
            });

            setMessagesGroup(items);
        }
    }, [messages]);

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
                    <div
                        ref={groupOverlayRef}
                        className={cn(cls.messages_group_overlay)}
                    >
                        <div className={cn(cls.messages_group_wrapper)}>
                            {[...messagesGroup].reverse().map((item, index) => {
                                return (
                                    <MessagesAreaGroup
                                        className={cn(cls.messages_group)}
                                        userIsOnline={false}
                                        date={item.date}
                                        messages={item.messages}
                                        key={index}
                                    />
                                );
                            })}
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
