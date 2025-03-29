"use client";
import { FC, MouseEventHandler, useState } from "react";
import { TClassName } from "@/types";
import { Button, Counter, ModalBase, Typography } from "@/components/ui";
import { SALESMAN_TARIFFS_MODAL } from "@/constants";
import { cn } from "@/lib";
import Image from "next/image";
import { useModalStore } from "@/store";
import cls from "./index.module.scss";
import { TariffItem } from "@/types/api";
import { useBuyTariffBuybacksMutation } from "@/hooks/api/tariffs";

interface Props extends TClassName {
    tariff: TariffItem;
}
const TariffsModal: FC<Props> = ({ className, tariff }) => {

    const { mutate, isPending } = useBuyTariffBuybacksMutation();

    const slug = `${SALESMAN_TARIFFS_MODAL}${tariff.id}`;

    const [count, setCount] = useState(tariff.buybacks_count);
    const pricePerOne = Math.ceil(tariff.price / tariff.buybacks_count);

    const hideModal = useModalStore((state) => state.hideModal);
    const handlePay: MouseEventHandler = () => {
        mutate({
            amount: count,
        }, {
            onSuccess: () => {
                hideModal({ slug });
            }
        });
    };
    const handleCancel: MouseEventHandler = () => {
        hideModal({ slug });
    };
    return (
        <ModalBase slug={slug} className={cn(cls.wrapper, [className])}>
            <div className={cn(cls.content)}>
                <Image
                    src={"/images/salesman/tariffs/modal-tag.svg"}
                    alt="Купить тариф"
                    width={48}
                    height={48}
                />
                <Typography font="Inter-SB" size={18} tag="h2">
                    {tariff.name}
                </Typography>
                <Typography font="Inter-R" size={14} tag="h4">
                    {pricePerOne}₽ за выкуп
                </Typography>
                <Counter
                    labelCls={cn(cls.counter_label)}
                    label={"Кол-во выкупов"}
                    className={cn(cls.counter)}
                    count={count}
                    setCount={setCount}
                    min={tariff.buybacks_count}
                />
                <Typography font="Inter-SB" size={18} tag="h3">
                    Сумма к оплате: <span>{count * pricePerOne}₽</span>
                </Typography>
                <div className={cn(cls.actions)}>
                    <Button
                        size="mid"
                        theme="outline"
                        className={cn(cls.btn)}
                        onClick={handleCancel}
                        disabled={isPending}
                    >
                        Отмена
                    </Button>
                    <Button
                        size="mid"
                        className={cn(cls.btn)}
                        theme="fill"
                        onClick={handlePay}
                        disabled={isPending}
                    >
                        Оплатить
                    </Button>
                </div>
            </div>
        </ModalBase>
    );
};

export { TariffsModal };
