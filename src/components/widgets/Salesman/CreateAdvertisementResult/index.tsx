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
import {
    balanceSelector,
    useSalesmanBalance,
} from "@/store/useSalesmanBalance";

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
    const balance = useSalesmanBalance(balanceSelector);
    const showModal = useModalStore((state) => state.showModal);
    const handleCancel: MouseEventHandler = () => {
        showModal({ slug: SALESMAN_CREATE_ADVERTISEMENT_CANCEL_MODAL });
    };
    const handlePublish: MouseEventHandler = () => {
        showModal({ slug: SALESMAN_CREATE_ADVERTISEMENT_PUBLISH_MODAL });
    };

    const priceWithCashback = price - (price / 100) * +cashback;
    const totalPriceForCashback = priceWithCashback * count;
    const redemptionPay = count * 90;

    let missingRedemptions = 0;
    let result = 0;

    if (balance?.redemption_count) {
        missingRedemptions =
            balance.redemption_count - count >= 0
                ? 0
                : count - balance.redemption_count;
        console.log(missingRedemptions);

        result = totalPriceForCashback + missingRedemptions;
    }

    console.log({
        result,
    });

    return (
        <section className={cn(cls.wrapper, [className])}>
            <Typography font="Inter-SB" size={20} tag="h2">
                Итого: <span>{result.toFixed(0)} ₽</span>
            </Typography>
            <div className={cn(cls.content)}>
                <Typography font="Inter-R" size={12}>
                    Выкупов: <span>{count} шт.</span>
                </Typography>
                <Typography font="Inter-R" size={12}>
                    Кэшбек для покупателя:{" "}
                    <span>
                        {count}шт. * ({price}₽ / 100%) * {+cashback}% ={" "}
                        {((price / 100) * +cashback * count).toFixed(0)}₽
                    </span>
                </Typography>
                <Typography font="Inter-R" size={12}>
                    Оплата выкупов:{" "}
                    <span>
                        {count}шт. * 90₽ = {redemptionPay}₽
                    </span>
                </Typography>
                {missingRedemptions > 0 ? (
                    <Typography font="Inter-R" size={12}>
                        Недостающих выкупов:{" "}
                        <span>
                            {missingRedemptions}шт. * 90₽ ={" "}
                            {missingRedemptions * 90}₽
                        </span>
                    </Typography>
                ) : null}
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
