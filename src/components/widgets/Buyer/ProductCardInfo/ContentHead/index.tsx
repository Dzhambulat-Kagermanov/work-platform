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

interface Props
    extends TClassName,
        Omit<
            TProductItemProps,
            | "isFavorite"
            | "previewImage"
            | "images"
            | "quantities"
            | "id"
            | "productDescription"
            | "salesmanId"
        > {
    salesman: Omit<TSalesmanInfo, "id" | "shopName">;
}
const ContentHead: FC<Props> = memo(
    ({
        name,
        price: { price, discount },
        salesman: { rating, productsWithCashback, boughtOut },
        className,
        tooltip,
    }) => {
        const width = useScreen();
        const prc = price.toFixed(2);
        const dsc =
            discount !== undefined
                ? (price - (price / 100) * discount).toFixed(2)
                : undefined;

        return (
            <div className={cn(cls.head, [className])}>
                <Typography
                    font="Inter-B"
                    size={width > XS_BIG ? 25 : 20}
                    tag="h2"
                    className={cn(cls.title)}
                >
                    {name}
                </Typography>
                {width <= SM_BIG && (
                    <div className={cn(cls.products_info)}>
                        <Typography
                            font="Inter-R"
                            size={width > XS_BIG ? 16 : 14}
                            tag="h5"
                        >
                            Выкупов: {boughtOut}
                        </Typography>
                        <Typography
                            font="Inter-R"
                            size={width > XS_BIG ? 16 : 14}
                            tag="h5"
                        >
                            Осталось товаров с кэшбеком у продавца:{" "}
                            {productsWithCashback}
                        </Typography>
                    </div>
                )}
                <Ratingbar className={cn(cls.rating)} rating={rating} />
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
                        {dsc || price} ₽
                    </Typography>
                    {dsc && (
                        <Typography font="Inter-M" size={20} tag="h6">
                            {prc} ₽
                        </Typography>
                    )}
                    {tooltip && (
                        <TooltipButton
                            tooltip={tooltip}
                            className={cn(cls.tooltip)}
                        />
                    )}
                    {discount && !(width <= MD_LOW && width > SM_BIG) && (
                        <div className={cn(cls.discount_plaque)}>
                            <Typography font="Inter-M" size={14}>
                                -{discount}%
                            </Typography>
                        </div>
                    )}
                </div>
            </div>
        );
    },
);

export { ContentHead };
