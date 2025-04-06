"use client";
import { FC, memo } from "react";
import { TClassName, TProductItemProps, TSalesmanInfo } from "@/types";
import { cn } from "@/lib";
import { Typography } from "@/components/ui";
import { Ratingbar } from "@/components/ui";
import { TooltipButton } from "@/components/ui";
import { useScreen } from "@/hooks";
import { MD_LOW, SM_BIG, XS_BIG } from "@/constants";
import cls from "./index.module.scss";
import { Product } from "@/types/api";
import { priceDiscountCalculate } from "@/lib/priceDiscountCalculate";

interface Props extends TClassName {
    product: Product;
}
const ContentHead: FC<Props> = memo(({ product, className }) => {
    const width = useScreen();
    const dsc = priceDiscountCalculate({
        price: +product.product.price,
        discount: +product.product.discount,
    });

    return (
        <div className={cn(cls.head, [className])}>
            <Typography
                font="Inter-B"
                size={width > XS_BIG ? 25 : 20}
                tag="h2"
                className={cn(cls.title)}
            >
                {product.name}
            </Typography>
            {width <= SM_BIG && (
                <div className={cn(cls.products_info)}>
                    <Typography
                        font="Inter-R"
                        size={width > XS_BIG ? 16 : 14}
                        tag="h5"
                    >
                        Выкупов: {product.redemption_count}
                    </Typography>
                    <Typography
                        font="Inter-R"
                        size={width > XS_BIG ? 16 : 14}
                        tag="h5"
                    >
                        Осталось товаров с кэшбеком у продавца:{" "}
                        {product.product.quantity_available}
                    </Typography>
                </div>
            )}
            <Ratingbar
                className={cn(cls.rating)}
                rating={+product.product.rating}
            />
            <div
                className={cn(cls.price, [], {
                    [cls.hasDiscount]: dsc !== undefined,
                })}
            >
                <Typography
                    font="Inter-B"
                    size={width > XS_BIG ? 28 : 24}
                    tag="h5"
                >
                    {(+dsc).toFixed(0) || 0} ₽
                </Typography>
                {dsc && (
                    <Typography font="Inter-M" size={20} tag="h6">
                        {(+product.product.price).toFixed(0)} ₽
                    </Typography>
                )}
                {/* {tooltip && (
                        <TooltipButton
                            tooltip={tooltip}
                            className={cn(cls.tooltip)}
                        />
                    )} */}
                {product.product.discount &&
                    !(width <= MD_LOW && width > SM_BIG) && (
                        <div className={cn(cls.discount_plaque)}>
                            <Typography font="Inter-M" size={14}>
                                -{Number(product.product.discount)}%
                            </Typography>
                        </div>
                    )}
            </div>
        </div>
    );
});

export { ContentHead };
