"use client";
import { FC, MouseEventHandler } from "react";
import { TClassName } from "@/types";
import { Typography } from "@/components/ui";
import { PlusIcon } from "@/icons";
import { cn } from "@/lib";
import { useModalStore } from "@/store";
import { SALESMAN_ADD_ADVERTISEMENT_MODAL } from "@/constants";
import cls from "./index.module.scss";

interface Props extends TClassName {}
const Head: FC<Props> = ({ className }) => {
    const hideModal = useModalStore((state) => state.hideModal);
    const handleClose: MouseEventHandler = () => {
        hideModal({ slug: SALESMAN_ADD_ADVERTISEMENT_MODAL });
    };

    return (
        <div className={cn(cls.head, [className])}>
            <Typography font="Inter-SB" size={18} tag="h2">
                Выберите товар:
            </Typography>
            <button className={cn(cls.close_btn)} onClick={handleClose}>
                <PlusIcon color="var(--black-200)" className={cn(cls.icon)} />
            </button>
        </div>
    );
};

export { Head };
