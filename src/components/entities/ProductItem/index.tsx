"use client";
import { FC, memo, useEffect, useState } from "react";
import { TTag } from "@/types";
import { cn } from "@/lib";
import { FavoriteIcon, HelpIcon } from "@/icons";
import { DiscountPlaque, Typography } from "@/components/ui";
import cls from "./index.module.scss";
import {
    useFavoritesAddMutation,
    useFavoritesRemoveMutation,
    useGetFavoritesQuery,
} from "@/hooks/api/favorites";
import { useSessionQuery } from "@/hooks/api/auth";
import { priceDiscountCalculate } from "@/lib/priceDiscountCalculate";

interface Props extends TTag {
    id: number;
    price: {
        price: number;
        discount?: number;
    };
    tooltip?: string;
    quantities?: number;
    name: string;
    image: string | null;

    wrapperCls?: string;
    headCls?: string;
    contentCls?: string;
}
const ProductItem: FC<Props> = memo(
    ({
        image,
        price,
        name,
        quantities,
        tooltip,
        tag = "div",
        contentCls,
        headCls,
        wrapperCls,
        id,
    }) => {
        const Tag = tag;
        const disc = price.discount;
        const dsc = priceDiscountCalculate({
            price: +price.price,
            discount: +(price.discount || 0),
        });

        const { data: userData } = useSessionQuery();

        const { data: favorites } = useGetFavoritesQuery();
        const { mutate: favoritesAddMutate, isPending: favoritesAddPending } =
            useFavoritesAddMutation();
        const {
            mutate: favoritesRemoveMutate,
            isPending: favoritesRemovePending,
        } = useFavoritesRemoveMutation();

        const [isFavorite, setIsFavorite] = useState(false);

        useEffect(() => {
            if (favorites) {
                setIsFavorite(favorites.some((el) => el.product.id === id));
            }
        }, [favorites]);

        const handleFavorite = () => {
            const body = {
                product_id: id,
                quantity: 1,
            };

            if (isFavorite) {
                setIsFavorite(false);
                favoritesRemoveMutate(body, {
                    onError: () => {
                        setIsFavorite(true);
                    },
                });
                return;
            }

            setIsFavorite(true);
            favoritesAddMutate(body, {
                onError: () => {
                    setIsFavorite(false);
                },
            });
        };

        return (
            <Tag
                className={cn(cls.item, [wrapperCls], {
                    [cls.isFavorite]: !!isFavorite,
                    [cls.hasTooltip]: !!tooltip,
                    [cls.hasDiscount]: !!disc,
                })}
            >
                <div className={cn(cls.head, [headCls])}>
                    {image ? (
                        <img src={image} alt="Товар" width={200} height={235} />
                    ) : (
                        <></>
                    )}
                    <div className={cn(cls.overlay)}>
                        {userData && userData.role.slug === "buyer" ? (
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleFavorite();
                                }}
                            >
                                <FavoriteIcon
                                    {...(isFavorite
                                        ? {
                                              stroke: "var(--purple-600)",
                                              color: "var(--purple-700)",
                                          }
                                        : { stroke: "var(--white-100)" })}
                                />
                            </button>
                        ) : (
                            <></>
                        )}
                        {!!disc && (
                            <div className={cn(cls.discount)}>
                                <DiscountPlaque>{disc}</DiscountPlaque>
                            </div>
                        )}
                    </div>
                </div>
                <div className={cn(cls.content, [contentCls])}>
                    <div className={cn(cls.price)}>
                        <Typography font="Inter-SB" size={18} tag="h5">
                            {(+dsc).toFixed(0)} ₽
                        </Typography>
                        {tooltip && (
                            <div
                                title={tooltip}
                                className={cn(cls.tooltip)}
                                onClick={(e) => {
                                    e.preventDefault();
                                }}
                            >
                                <HelpIcon color="var(--grey-300)" />
                            </div>
                        )}
                        {price.price && (
                            <Typography font="Inter-R" size={14} tag="h6">
                                {Math.round(price.price).toFixed(0)} ₽
                            </Typography>
                        )}
                    </div>
                    <Typography font="Inter-R" size={14} tag="h3">
                        {name}
                    </Typography>
                    {quantities ? (
                        <Typography
                            font="Inter-R"
                            size={14}
                            tag="h4"
                        >{`Осталось: ${quantities} шт`}</Typography>
                    ) : null}
                </div>
            </Tag>
        );
    },
);

export { ProductItem };
