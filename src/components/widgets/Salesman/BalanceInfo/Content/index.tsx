"use client";
import { FC, MouseEventHandler } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { Button, Typography } from "@/components/ui";
import cls from "./index.module.scss";
import { useModalStore } from "@/store";
import { SALESMAN_BALANCE_UP_MODAL } from "@/constants";
import { useGetBalanceQuery } from "@/hooks/api/auth";

interface Props extends TClassName {}
const Content: FC<Props> = ({ className }) => {
    const { data: balance } = useGetBalanceQuery();
    const showModal = useModalStore((state) => state.showModal);
    const handleClick: MouseEventHandler = () => {
        showModal({ slug: SALESMAN_BALANCE_UP_MODAL });
    };
    return (
        <div className={cn(cls.wrapper, [className])}>
            <div className={cn(cls.content)}>
                <div className={cn(cls.available)}>
                    <Typography font="Inter-R" size={12} tag="h5">
                        Доступно
                    </Typography>
                    <Typography font="Inter-SB" size={26}>
                        {balance?.accessBalance ?? 0} ₽
                    </Typography>
                </div>
                <div className={cn(cls.freeze)}>
                    <Typography font="Inter-R" size={12} tag="h5">
                        Заморожено в объявлениях
                    </Typography>
                    <Typography font="Inter-SB" size={26}>
                        {balance?.onConfirmation ?? 0} ₽
                    </Typography>
                </div>
            </div>
            <Button
                onClick={handleClick}
                size="mid"
                theme="fill"
                primaryColor="var(--green-100)"
                secondColor="var(--white-300)"
                className={cn(cls.balance_up_btn)}
            >
                Пополнить
            </Button>
        </div>
    );
};

export { Content };
