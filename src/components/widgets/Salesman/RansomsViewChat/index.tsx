"use client";
import { FC, useEffect } from "react";
import { TClassName } from "@/types";
import { RansomsViewChat as ViewChat } from "../../shared/RansomsViewChat";
import {
    initSalesmanDataSelector,
    salesmanActiveChatSelector,
    salesmanDataSelector,
    setSalesmanActiveChatSelector,
    useChat,
} from "@/store/useChat";
import { useGetSalesmanOrder } from "@/hooks/api/orders/useGetSalesmanOrder";

interface Props extends TClassName {}

const RansomsViewChat: FC<Props> = ({ className }) => {
    const activeId = useChat(salesmanActiveChatSelector);
    const setActiveId = useChat(setSalesmanActiveChatSelector);

    const ordersQuery = useGetSalesmanOrder({ buybackId: activeId as number });

    const initSalesmanData = useChat(initSalesmanDataSelector);
    const salesmanData = useChat(salesmanDataSelector);

    useEffect(() => {
        if (ordersQuery.data && ordersQuery.status === "success") {
            initSalesmanData(ordersQuery.data);
        }
    }, [ordersQuery.status, activeId]);

    return (
        <ViewChat
            role="salesman"
            chatData={salesmanData}
            isLoading={ordersQuery.isLoading}
            setActiveId={setActiveId}
            activeId={activeId}
            className={className}
        />
    );
};

export { RansomsViewChat };
