"use client";
import { FC, MouseEventHandler } from "react";
import { TClassName } from "@/types";
import { Button, Counter, ModalBase, Typography } from "@/components/ui";
import { SALESMAN_TARIFFS_MODAL } from "@/constants";
import { cn } from "@/lib";
import Image from "next/image";
import { useModalStore } from "@/store";
import cls from "./index.module.scss";

interface Props extends TClassName {}
const TariffsModal: FC<Props> = ({ className }) => {
    const hideModal = useModalStore((state) => state.hideModal);
    const handlePay: MouseEventHandler = () => {
        hideModal({ slug: SALESMAN_TARIFFS_MODAL });
    };
    const handleCancel: MouseEventHandler = () => {
        hideModal({ slug: SALESMAN_TARIFFS_MODAL });
    };
    return (
        <ModalBase
            slug={SALESMAN_TARIFFS_MODAL}
            className={cn(cls.wrapper, [className])}
        >
            <div className={cn(cls.content)}>
                <Image
                    src={"/images/salesman/tariffs/modal-tag.svg"}
                    alt="Купить тариф"
                    width={48}
                    height={48}
                />
                <Typography font="Inter-SB" size={18} tag="h2">
                    Пакет Start
                </Typography>
                <Typography font="Inter-R" size={14} tag="h4">
                    100₽ за выкуп
                </Typography>
                <Counter
                    labelCls={cn(cls.counter_label)}
                    label={"Кол-во выкупов"}
                    className={cn(cls.counter)}
                />
                <Typography font="Inter-SB" size={18} tag="h3">
                    Сумма к оплате: <span>1000₽</span>
                </Typography>
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
                        className={cn(cls.btn)}
                        theme="fill"
                        onClick={handlePay}
                    >
                        Оплатить
                    </Button>
                </div>
            </div>
        </ModalBase>
    );
};

export { TariffsModal };
