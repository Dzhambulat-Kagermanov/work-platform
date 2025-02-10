"use client";
import { FC, useState } from "react";
import { TClassName, TState } from "@/types";
import { cn } from "@/lib";
import { CHATS } from "../constants/chats";
import { ChatItem } from "@/components/entities/ChatItem";
import cls from "./index.module.scss";
import { useGetChatListQuery } from "@/hooks/api/chat";
import { ChatStatus } from "@/types/api";
import { PageLoader } from "@/components/ui/loaders";
import { PageErrorStub } from "@/components/ui/page-error-stub";

interface Props extends TClassName {
    activeIdSTUB?: number;
    setActiveIdSTUB: TState<number | undefined>;
    chatType: ChatStatus;
    search: string;
}
const Chats: FC<Props> = ({
    className,
    activeIdSTUB,
    setActiveIdSTUB,
    chatType,
    search,
}) => {
    const query = () => {
        const res = [
            {
                key: "status",
                value: chatType as string,
            },
        ];

        if (search.trim()) {
            res.push({
                key: "search",
                value: search.trim(),
            });
        }

        return res;
    };

    const { data: chats, isLoading } = useGetChatListQuery(query());

    if (isLoading) {
        return <PageLoader className="h-full" />;
    }

    if (!chats || !chats.length) {
        return <PageErrorStub text="Чаты не найдены" className="h-full" />;
    }

    return (
        <ul className={cn(cls.wrapper, [className])}>
            {/* {chats.map(
                (item) => {
                    return (
                        <ChatItem
                            tag="li"
                            setIsActive={setActiveIdSTUB}
                            newMessagesQnt={newMessagesQnt}
                            isActive={activeIdSTUB === id}
                            key={id}
                            avatar={avatar}
                            isOnline={isOnline}
                            id={id}
                            lastOnlineTime={lastOnlineTime}
                            productName={productName}
                            lastMessage={lastMessage}
                            className={cn(cls.item)}
                            footerCls={cn(cls.item_footer)}
                            headCls={cn(cls.item_head)}
                            contentCls={cn(cls.item_content)}
                        />
                    );
                },
            )} */}
        </ul>
    );
};

export { Chats };
