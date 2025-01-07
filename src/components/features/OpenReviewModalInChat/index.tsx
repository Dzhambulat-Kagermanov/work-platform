"use client";
import { FC } from "react";
import { TClassName } from "@/types";
import { Typography } from "@/components/ui";
import { cn } from "@/lib";
import { useModalStore } from "@/store";
import { BUYER_DELIVERY_REVIEW_MODAL } from "@/constants";
import cls from "./index.module.scss";

interface Props extends TClassName {}
const OpenReviewModalInChat: FC<Props> = ({ className }) => {
    const showModal = useModalStore((state) => state.showModal);
    const handleClick = () => {
        showModal({ slug: BUYER_DELIVERY_REVIEW_MODAL });
    };
    return (
        <button className={cn(cls.btn, [className])} onClick={handleClick}>
            <Typography font="Inter-R" size={14} className={cn(cls.text)}>
                Оставить отзыв
            </Typography>
        </button>
    );
};

export { OpenReviewModalInChat };
