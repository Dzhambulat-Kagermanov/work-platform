"use client";
import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { Button, Typography } from "@/components/ui";
import { PlusIcon } from "@/icons";
import { useModalStore, useScreen } from "@/hooks";
import { Paid } from "../Paid";
import cls from "./index.module.scss";
import { SALESMAN_BALANCE_PROMOCODE_MODAL } from "@/constants";
import { RansomsType } from "@/components/page/Salesman/Balance";

interface Props extends TClassName, RansomsType {}
const Actions: FC<Props> = ({ className, ransoms, setRansoms }) => {
    const width = useScreen();

    const showModal = useModalStore((state) => state.showModal);
    const handlePromocode = () => {
        showModal({ slug: SALESMAN_BALANCE_PROMOCODE_MODAL });
    };

    return (
        <div className={cn(cls.wrapper, [className])}>
            {/* <div className={cn(cls.item, [cls.ransoms])}>
                <Typography font="Inter-R" size={12} tag="h3">
                    Выкупы
                </Typography>
                <div
                    className={cn(cls.info)}
                    onClick={() => setRansoms((prev) => prev + 1)}
                >
                    <Typography font="Inter-R" size={12}>
                        {ransoms} шт
                    </Typography>
                    <button className={cn(cls.plus_btn)}>
                        <PlusIcon color="var(--grey-100)" />
                    </button>
                </div>
            </div> */}

            <Button
                theme="fill"
                className={cn("", [cls.promocode])}
                onClick={handlePromocode}
            >
                Ввести промокод
            </Button>
            {width <= 700 && width > 550 && <Paid className={cn(cls.paid)} />}
        </div>
    );
};

export { Actions };
