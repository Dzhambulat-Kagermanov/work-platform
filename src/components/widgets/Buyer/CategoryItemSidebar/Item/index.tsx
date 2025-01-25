import { FC } from "react";
import { TClassName, TSubcategoryItemProps } from "@/types";
import { Typography } from "@/components/ui";
import { cn } from "@/lib";
import Link from "next/link";
import cls from "./index.module.scss";
import { ROUTES } from "@/constants";

interface Props extends TClassName, TSubcategoryItemProps {
    subcategory?: string;
    linkCls?: string;
    id: number;
    categoryId: string;
}
const Item: FC<Props> = ({
    className,
    id,
    subcategory,
    productsQnt,
    title,
    linkCls,
    categoryId,
}) => {
    return (
        <li
            className={cn(cls.item, [className], {
                [cls.active]:
                    !!(subcategory && Number(subcategory) === id),
            })}
            key={title}
        >
            <Link
                href={`${ROUTES.BUYER.CATEGORY}?categoryId=${categoryId}&subcategory=${id}`}
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
