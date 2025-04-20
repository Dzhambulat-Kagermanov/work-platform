"use client";
import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { Typography } from "@/components/ui";
import cls from "./index.module.scss";
import { useProductsListQuery } from "@/hooks/api/products";

interface Props extends TClassName {}
const Head: FC<Props> = ({ className }) => {
    const { data: products } = useProductsListQuery();

    // Get total count from the first page, default to 0 if data is not available
    const totalProducts = products?.pages[0]?.total ?? 0;

    return (
        <div className={cn(cls.head, [className])}>
            <Typography tag="h2" font="Inter-SB" size={25}>
                Товары с кэшбеком:
            </Typography>
            <Typography tag="h3" font="Inter-R" size={14}>
                {`${totalProducts} товаров`}
            </Typography>
        </div>
    );
};

export { Head };
