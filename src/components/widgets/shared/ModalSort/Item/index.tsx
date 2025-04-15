"use client";
import { FC, MouseEvent } from "react";
import { TClassName, TTag } from "@/types";
import { cn } from "@/lib";
import { Typography } from "@/components/ui";
import cls from "./index.module.scss";
import { SortType } from "@/store/useFiltersStore";
import { SlugSelectItem } from "../constants/slugs";

interface Props extends TClassName, TTag {
    activeSlug: string;
    setActiveSlug: (value: SortType) => void;
    slug: SlugSelectItem;
    onClick?: () => void;
}
const Item: FC<Props> = ({
    activeSlug,
    setActiveSlug,
    className,
    tag = "div",
    slug,
    onClick,
}) => {
    const Tag = tag;
    const handleClick = (e: MouseEvent) => {
        onClick && onClick();
        setActiveSlug(slug.value);
    };
    return (
        <Tag
            className={cn(cls.item, [className], {
                [cls.active]: activeSlug === slug.value,
            })}
            onClick={handleClick}
        >
            <Typography font="Inter-M" size={14} tag="h4">
                {slug.label}
            </Typography>
            <div className={cn(cls.circle)} />
        </Tag>
    );
};

export { Item };
