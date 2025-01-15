"use client";
import { FC, MouseEventHandler } from "react";
import { TClassName, TState } from "@/types";
import { Typography, Button } from "@/components/ui";
import { cn } from "@/lib";
import Image from "next/image";
import { TModalStep } from "..";
import Link from "next/link";
import cls from "./index.module.scss";
import { ROUTES } from "@/constants";

interface Props extends TClassName {
    setStep: TState<TModalStep>;
}
const FailAddShop: FC<Props> = ({ className, setStep }) => {
    const handleConfirmClick: MouseEventHandler = () => {
        setStep(null);
    };
    return (
        <div className={cn(cls.wrapper, [className])}>
            <Image
                src="/images/salesman/home/add-product-fail.svg"
                alt="Не получилось"
                width={48}
                height={48}
            />
            <Typography font="Inter-SB" size={18} tag="h2">
                Не получилось добавить магазин
            </Typography>
            <Typography font="Inter-M" size={14} tag="h3">
                Этот магазин уже добавлен в другой кабинет на Wbdiscount. Если
                это ваш кабинет, то авторизуйтесь там для продолжения работы.{" "}
                <br />
                <br />
                Если вам кажется, что произошла ошибка,{" "}
                <Link href={ROUTES.SALESMAN.SUPPORT} className={cn(cls.link)}>
                    свяжитесь с нами
                </Link>
            </Typography>
            <Button
                wFull
                size="mid"
                onClick={handleConfirmClick}
                theme="fill"
                className={cn(cls.btn, [cls.cancel_btn])}
            >
                Подтвердить
            </Button>
        </div>
    );
};

export { FailAddShop };
