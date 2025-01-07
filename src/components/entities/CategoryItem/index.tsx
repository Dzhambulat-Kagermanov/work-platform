"use client";
import { FC } from "react";
import { TClassName, TTag } from "@/types";
import { TCategoryItemProps } from "@/types";
import { cn } from "@/lib";
import { Typography } from "@/components/ui";
import Image from "next/image";
import Link from "next/link";
import cls from "./index.module.scss";
import { useScreen } from "@/hooks";
import { SM_BIG } from "@/constants";

interface Props extends TClassName, TCategoryItemProps, TTag {
    titleCls?: string;
    plaqueCls?: string;
}
const CategoryItem: FC<Props> = ({
    image,
    productsQnt,
    title,
    titleCls,
    className,
    plaqueCls,
    tag = "div",
}) => {
    const width = useScreen();
    const Tag = tag;

    return (
        <Tag className={cn(cls.wrapper, [className])}>
            <Link
                href={`/buyer/category?slug=${title}${
                    width > SM_BIG ? "&subcategory=Все" : ""
                }`}
            >
                <Image src={image} alt={title} width={200} height={235} />
                <Typography
                    font="Inter-M"
                    size={16}
                    tag="h2"
                    className={titleCls}
                >
                    {title}
                </Typography>
                <Typography font="Inter-M" size={14} className={plaqueCls}>
                    {productsQnt} товара
                </Typography>
            </Link>
        </Tag>
    );
};

export { CategoryItem };
