"use client";
import { FC, useEffect } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { ChatItem } from "@/components/entities/ChatItem";
import cls from "./index.module.scss";
import { useGetChatListQuery } from "@/hooks/api/chat";
import { ChatStatus } from "@/types/api";
import { PageLoader } from "@/components/ui/loaders";
import { PageErrorStub } from "@/components/ui/page-error-stub";
import {
    addBuyerMessageSelector,
    buyerActiveChatSelector,
    initBuyerChatsSelector,
    isMobileVersionSelector,
    setBuyerActiveChatSelector,
    updateBuyerDataSelector,
    useChat,
} from "@/store/useChat";
import { formatTimeToHHMM } from "@/lib/formatTimeToHHMM";

interface Props extends TClassName {
    chatType: ChatStatus;
    search: string;
}
const Chats: FC<Props> = ({ className, chatType, search }) => {
    const activeId = useChat(buyerActiveChatSelector);
    const setActiveChatId = useChat(setBuyerActiveChatSelector);
    const addMessage = useChat(addBuyerMessageSelector);
    const updateBuyerData = useChat(updateBuyerDataSelector);
    const isMobileVersion = useChat(isMobileVersionSelector);

    const query = () => {
        const res = [
            {
                key: "status",
                value: (chatType ?? "all") as string,
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
    const initChats = useChat(initBuyerChatsSelector);

    // EFFECTS
    useEffect(() => {
        if (chats) {
            initChats(chats);
        }
    }, [chats]);

    useEffect(() => {
        if (activeId === undefined && chats && chats.length && !isMobileVersion)
            setActiveChatId(chats[0].id);
    }, [chats]);

    if (isLoading) {
        return <PageLoader className="h-full" />;
    }

    if (!chats || !chats.length) {
        return <PageErrorStub text="Чаты не найдены" className="h-full" />;
    }

    return (
        <ul className={cn(cls.wrapper, [className])}>
            {chats.map((item) => {
                return (
                    <ChatItem
                        addMessage={addMessage}
                        key={item.id}
                        tag="li"
                        setIsActive={(id) => {
                            setActiveChatId(id);
                            updateBuyerData(id);
                        }}
                        newMessagesQnt={item.messages.length}
                        isActive={activeId === item.id}
                        avatar={item.user.avatar ?? ""}
                        isOnline={item.user.is_online}
                        id={item.id}
                        lastOnlineTime={formatTimeToHHMM(
                            item.updated_at || item.created_at || "",
                        )}
                        productName={item.ad.product.name}
                        lastMessage={
                            item.messages[item.messages.length - 1]?.text || ""
                        }
                        className={cn(cls.item)}
                        footerCls={cn(cls.item_footer)}
                        headCls={cn(cls.item_head)}
                        contentCls={cn(cls.item_content)}
                    />
                );
            })}
        </ul>
    );
};

export { Chats };
