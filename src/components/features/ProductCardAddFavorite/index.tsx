"use client";
import { FC, MouseEvent, useState } from "react";
import { TClassName, TProductItemProps } from "@/types";
import { Button } from "@/components/ui";
import cls from "./index.module.scss";
import { cn } from "@/lib";
import {
    useFavoritesAddMutation,
    useFavoritesRemoveMutation,
} from "@/hooks/api/favorites";
import { useSessionQuery } from "@/hooks/api/auth";
import useModalStore, { showModalSelector } from "@/store/useModalStore";
import { UNAUTHENTICATED_MODAL } from "@/constants";

interface Props
    extends TClassName,
        Pick<TProductItemProps, "id" | "isFavorite"> {}
const ProductCardAddFavorite: FC<Props> = ({ className, id, isFavorite }) => {
    const showModal = useModalStore(showModalSelector);
    const { data: userData } = useSessionQuery();
    const { mutate: favoritesAddMutate, isPending: favoritesAddPending } =
        useFavoritesAddMutation();
    const { mutate: favoritesRemoveMutate, isPending: favoritesRemovePending } =
        useFavoritesRemoveMutation();

    const [favorite, setFavorite] = useState(isFavorite);

    const disabled = favoritesAddPending || favoritesRemovePending;

    const handleClick = (e: MouseEvent) => {
        // Check if user is logged in
        if (!userData) {
            // Show auth modal instead of making API call that would fail
            showModal({ slug: UNAUTHENTICATED_MODAL });
            return;
        }

        const body = {
            product_id: id,
            quantity: 1,
        };

        if (favorite) {
            favoritesRemoveMutate(body, {
                onSuccess: () => {
                    setFavorite(false);
                },
            });
            return;
        }

        favoritesAddMutate(body, {
            onSuccess: () => {
                setFavorite(true);
            },
        });
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
