"use client";
import { FC, MouseEventHandler } from "react";
import { TClassName, TState } from "@/types";
import { cn } from "@/lib";
import Image from "next/image";
import { Button, Input, Typography } from "@/components/ui";
import { TModalStep } from "..";
import cls from "./index.module.scss";
import { useModalStore } from "@/store";
import { SALESMAN_ADD_PRODUCT_MODAL } from "@/constants";
import { useGetWbProductMutation } from "@/hooks/api/seller";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { WbProduct } from "@/types/api/Product";

interface Props extends TClassName {
    setStep: TState<TModalStep>;
    art: string;
    setArt: (value: string) => void;
    setProductInfo: (value: WbProduct | null) => void;
}
const AddProduct: FC<Props> = ({
    className,
    setProductInfo,
    setStep,
    setArt,
    art,
}) => {
    const { mutate: getWbProductMutate, isPending: isPendingGet } =
        useGetWbProductMutation();

    const hideModal = useModalStore((state) => state.hideModal);
    const handleCancelClick: MouseEventHandler = () => {
        hideModal({ slug: SALESMAN_ADD_PRODUCT_MODAL });
    };
    const handleConfirmClick: MouseEventHandler = () => {
        getWbProductMutate(
            {
                id: art,
            },
            {
                onSuccess: (data) => {
                    setProductInfo(data.product);
                    toast.success("Товар успешно найден");
                },
                onError: (e) => {
                    const error = e as AxiosError<{ message: string }>;
                    toast.error(
                        error.response?.data.message ??
                            "Не удалось получить товар",
                    );
                    setStep("failAddProduct");
                },
            },
        );
    };

    return (
        <div className={cn(cls.wrapper, [className])}>
            <Image
                src={"/images/salesman/home/add-product-cube.svg"}
                alt="Добавить товар"
                width={48}
                height={48}
            />
            <Typography font="Inter-SB" size={18} tag="h2">
                Добавление товара
            </Typography>
            <Typography font="Inter-M" size={14} tag="h3">
                Введите артикул товара с Вайлдберис
            </Typography>
            <Input
                label="Артикул:"
                value={art}
                onChange={(e) => setArt(e.target.value.trim())}
                disabled={isPendingGet}
                wrapperCls={cn(cls.inp_wrapper)}
                labelCls={cn(cls.inp_label)}
            />
            <div className={cn(cls.actions)}>
                <Button
                    size="mid"
                    disabled={isPendingGet}
                    onClick={handleCancelClick}
                    theme="outline"
                    className={cn(cls.btn, [cls.cancel_btn])}
                >
                    Отмена
                </Button>
                <Button
                    size="mid"
                    disabled={!art || isPendingGet}
                    onClick={handleConfirmClick}
                    theme="fill"
                    className={cn(cls.btn, [cls.cancel_btn])}
                >
                    Подтвердить
                </Button>
            </div>
        </div>
    );
};

export { AddProduct };
