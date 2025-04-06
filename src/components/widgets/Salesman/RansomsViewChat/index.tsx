"use client";
import { FC, useEffect } from "react";
import { TClassName, TState } from "@/types";
import { RansomsViewChat as ViewChat } from "../../shared/RansomsViewChat";
import {
    initSalesmanDataSelector,
    salesmanDataSelector,
    useChat,
} from "@/store/useChat";
import { chatPusherConfig, pusherClient } from "@/utils/pusher-client";
import { useGetSalesmanOrder } from "@/hooks/api/orders/useGetSalesmanOrder";

interface Props extends TClassName {
    setActiveSTUB: TState<number | undefined>;
    activeId?: number;
}

const RansomsViewChat: FC<Props> = ({ className, setActiveSTUB, activeId }) => {
    const ordersQuery = useGetSalesmanOrder({ buybackId: activeId as number });
    const initSalesmanData = useChat(initSalesmanDataSelector);
    const salesmanChatData = useChat(salesmanDataSelector);

    // EFFECTS
    useEffect(() => {
        if (activeId) {
            const config = chatPusherConfig({
                userId: activeId as number,
            });
            const channel = pusherClient.subscribe(config.channel);

            channel.bind(config.event, (data: any) => {
                console.log("Получены данные:", data);
            });
            return () => {
                channel.unbind(config.event);
                pusherClient.unsubscribe(config.channel);
            };
        }
    }, [activeId]);

    useEffect(() => {
        if (ordersQuery.data && ordersQuery.status === "success")
            initSalesmanData(ordersQuery.data);
    }, [ordersQuery.status, activeId]);

    return (
        <ViewChat
            role="salesman"
            chatData={salesmanChatData}
            isLoading={ordersQuery.isLoading}
            setActiveSTUB={setActiveSTUB}
            activeId={activeId}
            className={className}
        />
    );
};

export { RansomsViewChat };
