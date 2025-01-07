"use client";
import { FC, MouseEventHandler } from "react";
import { TClassName, TState } from "@/types";
import { cn } from "@/lib";
import Image from "next/image";
import { Typography } from "@/components/ui";
import { TSalesmanSelectProductProps } from "..";
import cls from "./index.module.scss";

interface Props extends TClassName, TSalesmanSelectProductProps {
    activeId: number;
    setActiveId: TState<number>;
}
const Item: FC<Props> = ({
    className,
    image,
    number,
    title,
    id,
    activeId,
    setActiveId,
}) => {
    const handleClick: MouseEventHandler = () => {
        setActiveId(id);
    };

    return (
        <li
            className={cn(cls.item, [className], {
                [cls.active]: activeId === id,
            })}
            onClick={handleClick}
        >
            <Image src={image} alt="Товар" width={40} height={40} />
            <div className={cn(cls.content)}>
                <Typography font="Inter-M" size={16} tag="h2">
                    {title}
                </Typography>
                <Typography font="Inter-R" size={16} tag="h3">
                    {number}
                </Typography>
            </div>
            <div className={cn(cls.indicator)} />
        </li>
    );
};

export { Item };
