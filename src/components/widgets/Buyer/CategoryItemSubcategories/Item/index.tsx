import { FC } from "react";
import { TClassName, TSubcategoryItemProps } from "@/types";
import { cn } from "@/lib";
import { Typography } from "@/components/ui";
import Link from "next/link";
import { ExpandArrowIcon } from "@/icons";
import cls from "./index.module.scss";
import { ROUTES } from "@/constants";

interface Props extends TClassName, TSubcategoryItemProps {
    categoryId: string;
    id: number;
}
const Item: FC<Props> = ({ productsQnt, title, className, categoryId, id }) => {
    return (
        <li className={cn(cls.item, [className])}>
            <Link
                className={cn(cls.link)}
                href={`${ROUTES.BUYER.CATEGORY}?categoryId=${categoryId}&subcategory=${id}`}
            >
                <Typography font="Inter-M" size={18}>
                    {title} ({productsQnt})
                </Typography>
                <ExpandArrowIcon
                    className={cn(cls.icon)}
                    color="var(--white-400)"
                />
            </Link>
        </li>
    );
};

export { Item };
