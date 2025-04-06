"use client";
import { FC, useEffect } from "react";
import { TClassName, TState } from "@/types";
import { RansomsViewChat as ViewChat } from "../../shared/RansomsViewChat";
import { useGetOrderQuery } from "@/hooks/api/orders";
import {
    initBuyerDataSelector,
    buyerDataSelector,
    useChat,
} from "@/store/useChat";
import { useProfile, userIdSelector } from "@/store/useProfile";
import { chatPusherConfig, pusherClient } from "@/utils/pusher-client";

interface Props extends TClassName {
    setActiveSTUB: TState<number | undefined>;
    activeId?: number;
}

const RansomsViewChat: FC<Props> = ({ className, setActiveSTUB, activeId }) => {
    const userId = useProfile(userIdSelector);
    const ordersQuery = useGetOrderQuery(activeId);
    const initBuyerData = useChat(initBuyerDataSelector);
    const buyerChatData = useChat(buyerDataSelector);

    // EFFECTS
    useEffect(() => {
        if (userId) {
            const config = chatPusherConfig({
                userId: userId as number,
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
    }, [userId]);

    useEffect(() => {
        if (ordersQuery.data && ordersQuery.status === "success")
            initBuyerData(ordersQuery.data);
    }, [ordersQuery.status]);

    return (
        <ViewChat
            role="buyer"
            chatData={buyerChatData}
            isLoading={ordersQuery.isLoading}
            setActiveSTUB={setActiveSTUB}
            activeId={activeId}
            className={className}
        />
    );
};

export { RansomsViewChat };
