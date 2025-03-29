"use client";
import { FC, MouseEventHandler, useEffect } from "react";
import { TClassName, TState } from "@/types";
import { ProductInfo, TModalStep } from "..";
import { Typography, Input, Button } from "@/components/ui";
import { cn } from "@/lib";
import Image from "next/image";
import cls from "./index.module.scss";
import { SALESMAN_ADD_PRODUCT_MODAL } from "@/constants";
import { useModalStore } from "@/store";

interface Props extends TClassName {
    setStep: TState<TModalStep>;
    info: ProductInfo;
}
const AddShop: FC<Props> = ({ className, setStep, info }) => {
    const hideModal = useModalStore((state) => state.hideModal);
    const handleCancelClick: MouseEventHandler = () => {
        hideModal({ slug: SALESMAN_ADD_PRODUCT_MODAL });
    };

    const handleConfirmShop = () => {
        setStep("addProductConfirmation");
    };

    useEffect(() => {
        if (!info || !info.shop) {
            setStep("failAddShop");
        }
    }, []);

    if (!info || !info.shop) {
        return <></>;
    }

    return (
        <div className={cn(cls.wrapper, [className])}>
            <Image
                src="/images/salesman/home/add-product-cart.svg"
                alt="Не получилось"
                width={48}
                height={48}
            />
            <Typography font="Inter-SB" size={18} tag="h2">
                Добавление магазина
            </Typography>
            <Typography font="Inter-M" size={14} tag="h3">
                Этот товар находится в магазине продавца {info.shop.wb_name}
                <br />
                <br />
                Подтвердите добавление магазина в ваш профиль на Wbdiscount.{" "}
                <br />
                <br />
                <span>
                    (Этот шаг делается один раз для новой учетной записи)
                </span>
            </Typography>
            <div className={cn(cls.inps)}>
                <Input
                    label="ИНН"
                    defaultValue={info.shop.inn}
                    wrapperCls={cn(cls.inp_wrapper)}
                    labelCls={cn(cls.inp_label)}
                    readOnly
                />
                <Input
                    label="Наименование юр лица"
                    defaultValue={info.shop.legal_name}
                    wrapperCls={cn(cls.inp_wrapper)}
                    labelCls={cn(cls.inp_label)}
                    readOnly
                />
                <Input
                    label="Название магазина на Wildberries"
                    defaultValue={info.shop.wb_name}
                    wrapperCls={cn(cls.inp_wrapper)}
                    labelCls={cn(cls.inp_label)}
                    readOnly
                />
            </div>
            <div className={cn(cls.actions)}>
                <Button
                    size="mid"
                    onClick={handleCancelClick}
                    theme="outline"
                    className={cn(cls.btn, [cls.cancel_btn])}
                >
                    Отмена
                </Button>
                <Button
                    size="mid"
                    onClick={handleConfirmShop}
                    theme="fill"
                    className={cn(cls.btn, [cls.cancel_btn])}
                >
                    Подтвердить
                </Button>
            </div>
        </div>
    );
};

export { AddShop };
