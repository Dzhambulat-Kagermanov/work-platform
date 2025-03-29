"use client";
import { FC, MouseEvent, useState } from "react";
import { TClassName, TProductItemProps } from "@/types";
import { Button } from "@/components/ui";
import cls from "./index.module.scss";
import { cn } from "@/lib";
import { useFavoritesAddMutation, useFavoritesRemoveMutation } from "@/hooks/api/favorites";

interface Props
    extends TClassName,
        Pick<TProductItemProps, "id" | "isFavorite"> {}
const ProductCardAddFavorite: FC<Props> = ({ className, id, isFavorite, }) => {

    const { mutate: favoritesAddMutate, isPending: favoritesAddPending } = useFavoritesAddMutation();
    const { mutate: favoritesRemoveMutate, isPending: favoritesRemovePending } = useFavoritesRemoveMutation();

    const [favorite, setFavorite] = useState(isFavorite);

    const disabled = favoritesAddPending || favoritesRemovePending;

    const handleClick = (e: MouseEvent) => {

        const body = {
            product_id: id,
        };

        if (favorite) {
            favoritesRemoveMutate(body, {
                onSuccess: () => {
                    setFavorite(false);
                }
            });
            return;
        }

        favoritesAddMutate(body, {
            onSuccess: () => {
                setFavorite(true);
            }
        })

    };
    return (
        <Button
            theme={favorite ? "outline" : "fill"}
            onClick={handleClick}
            disabled={disabled}
            className={cn(cls.btn, [className])}
        >
            {favorite ? "В избранном" : "В избранное"}
        </Button>
    );
};

export { ProductCardAddFavorite };
