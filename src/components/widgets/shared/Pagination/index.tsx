"use client";
import { FC, MouseEventHandler } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { Typography } from "@/components/ui";
import cls from "./index.module.scss";
import { PaginationValue } from "@/hooks/client/usePagination";

export type TPaginationProps = {
    onPrev?: MouseEventHandler;
    onNext?: MouseEventHandler;
    pagination: PaginationValue;
};

interface Props extends TClassName, TPaginationProps {}
const Pagination: FC<Props> = ({
    className,
    onNext,
    onPrev,
    pagination: { current, max },
}) => {
    const handlePrev: MouseEventHandler = (e) => {
        if (current - 1 <= 0) {
            return;
        }

        onPrev && onPrev(e);
    };
    const handleNext: MouseEventHandler = (e) => {
        if (current + 1 > max) {
            return;
        }
        onNext && onNext(e);
    };

    return (
        <div className={cn(cls.wrapper, [className])}>
            <div className={cn(cls.actions)}>
                <button className={cn(cls.btn)} onClick={handlePrev}>
                    <Typography font="Inter-SB" size={14}>
                        Назад
                    </Typography>
                </button>
                <button className={cn(cls.btn)} onClick={handleNext}>
                    <Typography font="Inter-SB" size={14}>
                        Дальше
                    </Typography>
                </button>
            </div>
            <Typography font="Inter-M" size={14} tag="h2">
                Страница {current} из {max}
            </Typography>
        </div>
    );
};

export { Pagination };
