"use client";
import { FC, useEffect } from "react";
import { TClassName } from "@/types";
import { RansomsViewChat as ViewChat } from "../../shared/RansomsViewChat";
import { useGetOrderQuery } from "@/hooks/api/orders";
import {
    initBuyerDataSelector,
    buyerDataSelector,
    useChat,
    buyerActiveChatSelector,
    setBuyerActiveChatSelector,
} from "@/store/useChat";

interface Props extends TClassName {}

const RansomsViewChat: FC<Props> = ({ className }) => {
    const activeId = useChat(buyerActiveChatSelector);
    const setActiveId = useChat(setBuyerActiveChatSelector);

    const initBuyerData = useChat(initBuyerDataSelector);
    const buyerChatData = useChat(buyerDataSelector);
    // Всегда выполнять запрос при изменении activeId, независимо от наличия данных в buyerChatData
    const ordersQuery = useGetOrderQuery(activeId, activeId !== undefined);

    useEffect(() => {
        if (ordersQuery.data && ordersQuery.status === "success") {
            initBuyerData(ordersQuery.data);
        }
    }, [ordersQuery.status, activeId]);

    return (
        <ViewChat
            role="buyer"
            chatData={buyerChatData}
            isLoading={ordersQuery.isLoading}
            setActiveId={setActiveId}
            activeId={activeId}
            className={className}
        />
    );
};

export { RansomsViewChat };
