"use client";
import { FC, MouseEventHandler } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import Image from "next/image";
import { Typography } from "@/components/ui";
import { TSalesmanSelectProductProps } from "..";
import cls from "./index.module.scss";

interface Props extends TClassName, TSalesmanSelectProductProps {
    selectedItem: number | null;
    setSelectedItem: (value: number | null) => void;
}
const Item: FC<Props> = ({
    className,
    image,
    number,
    title,
    id,
    selectedItem,
    setSelectedItem,
}) => {
    const handleClick: MouseEventHandler = () => {
        setSelectedItem(id);
    };

    return (
        <li
            className={cn(cls.item, [className], {
                [cls.active]: selectedItem === id,
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
