"use client";
import { FC, MouseEventHandler, useEffect, useState } from "react";
import { TClassName, TState } from "@/types";
import { cn } from "@/lib";
import { Typography } from "@/components/ui";
import cls from "./index.module.scss";

interface Props extends TClassName {
    label: string;
    labelCls?: string;
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
    min?: number;
    max?: number;
}
const Counter: FC<Props> = ({
    className,
    label,
    count,
    setCount,
    labelCls,
    min = 0,
    max,
}) => {
    const handleMinus: MouseEventHandler = () => {
        setCount((cur) => (cur - 1 < min ? cur : cur - 1));
    };
    const handlePlus: MouseEventHandler = () => {
        setCount((cur) => (max ? (cur + 1 > max ? cur : cur + 1) : cur + 1));
    };

    return (
        <div className={cn(cls.wrapper, [className])}>
            <Typography
                font="Inter-M"
                size={14}
                tag="h2"
                className={cn(cls.label, [labelCls])}
            >
                {label}
            </Typography>
            <div className={cn(cls.counter)}>
                <button
                    onClick={handleMinus}
                    className={cn(cls.btn, [cls.minus])}
                    disabled={count - 1 < min}
                >
                    <Typography font="Inter-R" size={24} tag="span">
                        -
                    </Typography>
                </button>
                <Typography font="Inter-R" size={17} tag="span">
                    {count}
                </Typography>
                <button
                    onClick={handlePlus}
                    disabled={max ? count + 1 > max : false}
                    className={cn(cls.btn, [cls.plus])}
                >
                    <Typography font="Inter-R" size={24} tag="span">
                        +
                    </Typography>
                </button>
            </div>
        </div>
    );
};

export { Counter };
