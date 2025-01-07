import { FC } from "react";
import { TClassName, TSubcategoryItemProps } from "@/types";
import { Typography } from "@/components/ui";
import { cn } from "@/lib";
import Link from "next/link";
import cls from "./index.module.scss";

interface Props extends TClassName, TSubcategoryItemProps {
    slug: string;
    subcategory?: string;
    linkCls?: string;
}
const Item: FC<Props> = ({
    className,
    slug,
    subcategory,
    productsQnt,
    title,
    linkCls,
}) => {
    return (
        <li
            className={cn(cls.item, [className], {
                [cls.active]:
                    !!subcategory && decodeURIComponent(subcategory) === title,
            })}
            key={title}
        >
            <Link
                href={`/buyer/category?slug=${slug}&subcategory=${title}`}
                className={linkCls}
            >
                <Typography font="Inter-R" size={18}>
                    {title} ({productsQnt})
                </Typography>
            </Link>
        </li>
    );
};

export { Item };
