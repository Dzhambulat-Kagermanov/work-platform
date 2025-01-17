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
        const prc = price.price;

        const { data: userData } = useSessionQuery();

        const { data: favorites } = useGetFavoritesQuery();

        const favoritesAddMutation = useFavoritesAddMutation();
        const favoritesRemoveMutation = useFavoritesRemoveMutation();

        const [isFavorite, setIsFavorite] = useState(false);

        useEffect(() => {
            if (favorites) {
                setIsFavorite(favorites.some((el) => el.id === id));
            }
        }, [favorites]);

        const addToFavorite = () => {};

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
                            <div
                                onClick={(e) => {
                                    e.preventDefault();
                                    addToFavorite();
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
                            </div>
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
                            {!!disc
                                ? Math.round(prc - (prc / 100) * disc)
                                : prc}{" "}
                            ₽
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
                        {!!disc && (
                            <Typography font="Inter-R" size={14} tag="h6">
                                {Math.round(prc)} ₽
                            </Typography>
                        )}
                    </div>
                    <Typography font="Inter-R" size={14} tag="h3">
                        {name}
                    </Typography>
                    {quantities && (
                        <Typography
                            font="Inter-R"
                            size={14}
                            tag="h4"
                        >{`Осталось: ${quantities} шт`}</Typography>
                    )}
                </div>
            </Tag>
        );
    },
);

export { ProductItem };
