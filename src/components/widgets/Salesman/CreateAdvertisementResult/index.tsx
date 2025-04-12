"use client";
import { FC, MouseEventHandler } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { Button, Typography } from "@/components/ui";
import { useModalStore } from "@/store";
import {
    SALESMAN_CREATE_ADVERTISEMENT_CANCEL_MODAL,
    SALESMAN_CREATE_ADVERTISEMENT_PUBLISH_MODAL,
} from "@/constants";
import cls from "./index.module.scss";

interface Props extends TClassName {
    count: number;
    cashback: string;
    price: number;
    handleSubmit: () => void;
    disabled: boolean;
}
const CreateAdvertisementResult: FC<Props> = ({
    className,
    count,
    cashback,
    price,
    handleSubmit,
    disabled,
}) => {
    const showModal = useModalStore((state) => state.showModal);
    const handleCancel: MouseEventHandler = () => {
        showModal({ slug: SALESMAN_CREATE_ADVERTISEMENT_CANCEL_MODAL });
    };
    const handlePublish: MouseEventHandler = () => {
        showModal({ slug: SALESMAN_CREATE_ADVERTISEMENT_PUBLISH_MODAL });
    };

    const priceWithCashback = (price * +cashback) / 100;
    const totalPriceForCashback = priceWithCashback * count;
    const redemtionPay = count * 95;

    console.log({
        price,
        cashback,
        totalPriceForCashback,
        priceWithCashback,
        redemtionPay,
        count,
    });

    return (
        <section className={cn(cls.wrapper, [className])}>
            <Typography font="Inter-SB" size={20} tag="h2">
                Итого: <span>{redemtionPay + totalPriceForCashback} ₽</span>
            </Typography>
            <div className={cn(cls.content)}>
                <Typography font="Inter-R" size={12}>
                    Выкупов: <span>{count} шт.</span>
                </Typography>
                <Typography font="Inter-R" size={12}>
                    Кэшбек для покупателя:{" "}
                    <span>
                        {count}шт. * {priceWithCashback}₽ ={" "}
                        {totalPriceForCashback}₽
                    </span>
                </Typography>
                <Typography font="Inter-R" size={12}>
                    Оплата выкупов:{" "}
                    <span>
                        {count} шт * 95₽ = {redemtionPay}₽
                    </span>
                </Typography>
            </div>
            <div className={cn(cls.actions)}>
                <Button
                    size="mid"
                    theme="outline"
                    className={cn(cls.btn)}
                    onClick={handleCancel}
                >
                    Отмена
                </Button>
                <Button
                    size="mid"
                    theme="fill"
                    className={cn(cls.btn)}
                    onClick={handleSubmit}
                    disabled={disabled}
                >
                    Опубликовать
                </Button>
            </div>
        </section>
    );
};

export { CreateAdvertisementResult };
