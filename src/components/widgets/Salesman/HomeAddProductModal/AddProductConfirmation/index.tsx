"use client";
import { FC, MouseEventHandler, useEffect } from "react";
import { TClassName, TState } from "@/types";
import { ProductInfo, TModalStep } from "..";
import { cn } from "@/lib";
import { Typography, Button } from "@/components/ui";
import Image from "next/image";
import cls from "./index.module.scss";
import { useSessionQuery } from "@/hooks/api/auth";
import { useAddWbProductMutation } from "@/hooks/api/seller";
import { useQueryClient } from "@tanstack/react-query";
import useGetSellerProductsQuery, { SELLER_PRODUCTS_QUERY_KEY } from "@/hooks/api/seller/useGetSellerProductsQuery";

interface Props extends TClassName {
    setStep: TState<TModalStep>;
    info: ProductInfo;
    closeModal: () => void;
    setArt: TState<string>;
}
const AddProductConfirmation: FC<Props> = ({
    setStep,
    className,
    info,
    closeModal,
    setArt
}) => {
    const { data: userData } = useSessionQuery();
    const { mutate: addWbProductMutate, isPending } = useAddWbProductMutation();

    const queryClient = useQueryClient();

    const handleBackClick: MouseEventHandler = () => {
        setStep(!userData?.shop ? "addShop" : "addProduct");
    };
    const handleNextClick: MouseEventHandler = () => {
        addWbProductMutate(
            {
                id: `${info?.product.wb_id}`,
            },
            {
                onSuccess: () => {
                    queryClient.invalidateQueries({
                        queryKey: [SELLER_PRODUCTS_QUERY_KEY],
                    });
                    closeModal();
                    setStep("addProduct");
                    setArt("");
                },
            },
        );
    };

    useEffect(() => {
        if (!info || !info.product) {
            setStep("failAddProduct");
        }
    }, []);

    if (!info || !info.product) {
        return <></>;
    }

    return (
        <div className={cn(cls.wrapper, [className])}>
            <Typography font="Inter-SB" size={18} tag="h2">
                Добавление товара
            </Typography>
            <Typography font="Inter-M" size={14} tag="h3">
                Это ваш товар?
            </Typography>
            <div className={cn(cls.product)}>
                {info.product.images && info.product.images.length ? (
                    <img
                        src={info.product.images[0]}
                        alt={info.product.name}
                        width={40}
                        height={40}
                        className="object-cover min-w-10 w-10 h-10"
                    />
                ) : (
                    <></>
                )}
                <div className={cn(cls.info)}>
                    <Typography font="Inter-SB" size={14} tag="h3">
                        {info?.product.name}
                    </Typography>
                    <Typography font="Inter-R" size={14} tag="h4">
                        {info.shop.wb_name}
                    </Typography>
                </div>
            </div>
            <div className={cn(cls.actions)}>
                <Button
                    size="mid"
                    onClick={handleBackClick}
                    disabled={isPending}
                    theme="outline"
                    className={cn(cls.btn, [cls.cancel_btn])}
                >
                    Назад
                </Button>
                <Button
                    size="mid"
                    onClick={handleNextClick}
                    disabled={isPending}
                    theme="fill"
                    className={cn(cls.btn, [cls.cancel_btn])}
                >
                    Далее
                </Button>
            </div>
        </div>
    );
};

export { AddProductConfirmation };
