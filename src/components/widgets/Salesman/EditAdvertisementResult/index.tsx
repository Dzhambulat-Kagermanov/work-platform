"use client";
import { FC, MouseEventHandler } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { Button, Typography } from "@/components/ui";
import { useModalStore } from "@/store";
import { SALESMAN_CREATE_ADVERTISEMENT_CANCEL_MODAL } from "@/constants";
import cls from "./index.module.scss";
import {
    useSalesmanBalance,
    balanceSelector,
} from "@/store/useSalesmanBalance";
import Ad from "@/types/api/Ad";

interface Props extends TClassName {
    count: number;
    cashback: string;
    price: number;
    handleSubmit: () => void;
    disabled: boolean;
    currentRedemptions: Ad["redemption_count"];
}
const EditAdvertisementResult: FC<Props> = ({
    className,
    count,
    cashback,
    price,
    handleSubmit,
    disabled,
    currentRedemptions,
}) => {
    const balance = useSalesmanBalance(balanceSelector);
    const showModal = useModalStore((state) => state.showModal);
    const handleCancel: MouseEventHandler = () => {
        showModal({ slug: SALESMAN_CREATE_ADVERTISEMENT_CANCEL_MODAL });
    };

    const priceWithCashback = price - (price / 100) * +cashback;
    const totalPriceForCashback = priceWithCashback * count;
    const totalReturnPriceForCashback =
        priceWithCashback * currentRedemptions - totalPriceForCashback;
    const totalUpPriceForCashback =
        totalPriceForCashback - priceWithCashback * currentRedemptions;

    const isEqualToCurrent = currentRedemptions === count;

    let missingRedemptions = 0;
    let result = 0;

    if (balance?.redemption_count) {
        missingRedemptions =
            balance.redemption_count - count >= 0
                ? 0
                : count - balance.redemption_count;

        result = totalPriceForCashback + missingRedemptions * 90;
    }

    return (
        <section className={cn(cls.wrapper, [className])}>
            <Typography font="Inter-SB" size={20} tag="h2">
                {count > currentRedemptions
                    ? "Итого к пополнению"
                    : isEqualToCurrent
                      ? "Стоимость объявления"
                      : "Итого к возврату"}
                :{" "}
                <span>
                    {isEqualToCurrent
                        ? result.toFixed(0)
                        : count > currentRedemptions
                          ? totalUpPriceForCashback
                          : totalReturnPriceForCashback}{" "}
                    ₽
                </span>
            </Typography>
            <div className={cn(cls.content)}>
                <Typography font="Inter-R" size={12}>
                    Выкупов:{" "}
                    <span>
                        {missingRedemptions
                            ? `+${missingRedemptions}`
                            : `${count && !isEqualToCurrent ? "-" : ""}${count}`}{" "}
                        шт.
                    </span>
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
                        {missingRedemptions
                            ? `${missingRedemptions}шт. * 90₽ = ${missingRedemptions * 90}₽`
                            : "с баланса"}
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
                    Сохранить
                </Button>
            </div>
        </section>
    );
};

export { EditAdvertisementResult };
