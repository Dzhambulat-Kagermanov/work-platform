"use client";
import { FC } from "react";
import { TClassName } from "@/types";
import { Typography } from "@/components/ui";
import { cn } from "@/lib";
import { useModalStore, useScreen } from "@/hooks";
import { BUYER_DELIVERY_CHAT_ORDER_INFO_MODAL, MD_LOW } from "@/constants";
import cls from "./index.module.scss";
import { Order } from "@/types/api";

interface Props extends TClassName {
    orderId: Order["id"];
}
const HeadAreaOrderInfo: FC<Props> = ({ className, orderId }) => {
    const showModal = useModalStore((state) => state.showModal);
    const handleModalOpen = () => {
        showModal({ slug: BUYER_DELIVERY_CHAT_ORDER_INFO_MODAL });
    };

    const width = useScreen();
    return (
        <>
            {width > MD_LOW ? (
                <div className={cn(cls.wrapper, [className])}>
                    <Typography font="Inter-R" size={12} tag="h6">
                        Заказ #{orderId}
                    </Typography>
                </div>
            ) : (
                <button
                    className={cn(cls.modal_open_btn)}
                    onClick={handleModalOpen}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            )}
        </>
    );
};

export { HeadAreaOrderInfo };
