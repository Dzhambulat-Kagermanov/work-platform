"use client";
import { FC, MouseEventHandler } from "react";
import { TClassName, TState } from "@/types";
import { cn } from "@/lib";
import { Button, Typography } from "@/components/ui";
import { TModalStep } from "..";
import cls from "./index.module.scss";
import { useModalStore } from "@/store";
import { SALESMAN_ADVERTISEMENT_ARCHIVE_MODAL } from "@/constants";

interface Props extends TClassName {
}
const SuccessArchive: FC<Props> = ({ className }) => {
    const hideModal = useModalStore((state) => state.hideModal);
    const handleClick: MouseEventHandler = () => {
         hideModal({ slug: SALESMAN_ADVERTISEMENT_ARCHIVE_MODAL });
    };

    return (
        <div className={cn(cls.wrapper, [className])}>
            <Typography font="Inter-SB" size={18} tag="h2">
                Объявления архивированы
            </Typography>
            <Typography font="Inter-R" size={14} tag="h4">
                Объявления отправлены в архив.
            </Typography>
            <Button
                wFull
                size="mid"
                theme="fill"
                className={cn(cls.btn)}
                onClick={handleClick}
            >
                Понятно
            </Button>
        </div>
    );
};

export { SuccessArchive };
