"use client";
import { ButtonHTMLAttributes, FC } from "react";
import { cn } from "@/lib";
import { Typography } from "@/components/ui";
import { ExpandArrowIcon } from "@/icons";
import cls from "./index.module.scss";
import { CASHBACK_MODAL } from "@/constants";
import { useModalStore } from "@/store";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}
const FilterCashback: FC<Props> = ({ className, children, ...other }) => {
    const showModal = useModalStore((state) => state.showModal);
    const modalState = useModalStore(
        (state) => state.modalsStates[CASHBACK_MODAL]?.modalState,
    );
    const handleClick = () => {
        showModal({ slug: CASHBACK_MODAL });
    };
    return (
        <button
            className={cn(cls.btn, [className], {
                [cls.expand]: !!modalState,
            })}
            {...other}
            onClick={handleClick}
        >
            <Typography font="Inter-SB" size={14} className={cn(cls.text)}>
                Кэшбек, %
            </Typography>
            <ExpandArrowIcon color="var(--grey-300)" className={cn(cls.icon)} />
        </button>
    );
};

export { FilterCashback };
