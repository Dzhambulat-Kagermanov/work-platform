"use client";
import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { Typography } from "@/components/ui";
import cls from "./index.module.scss";
import { Product } from "@/types/api";

interface Props extends TClassName {
    product: Product;
}
const ContentSales: FC<Props> = ({ className, product }) => {
    return (
        <div className={cn(cls.wrapper, [className])}>
            <Typography font="Inter-R" size={16} tag="h5">
                Выкупили: {product.redemption_count}
            </Typography>
            <Typography font="Inter-R" size={16} tag="h6">
                Осталось товаров с кэшбеком у продавца:{" "}
                {product.product.quantity_available}
            </Typography>
        </div>
    );
};

export { ContentSales };
