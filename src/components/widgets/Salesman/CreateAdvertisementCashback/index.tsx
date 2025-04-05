import React, { FC } from "react";
import { TClassName } from "@/types";
import { Typography, SliderInput } from "@/components/ui";
import { cn } from "@/lib";
import cls from "./index.module.scss";

interface Props extends TClassName {
    setCashback: React.Dispatch<React.SetStateAction<string>>;
    price: number;
    cashback: string;
}
const CreateAdvertisementCashback: FC<Props> = ({
    setCashback,
    price,
    cashback,
    className,
}) => {
    return (
        <section className={cn(cls.wrapper, [className])}>
            <Typography font="Inter-M" size={14} tag="h2">
                Укажите размер кэшбека:
            </Typography>
            <SliderInput
                className={cn(cls.slider_inp)}
                max={100}
                min={0}
                steps={20}
                onChange={(e) => {
                    setCashback(e.target.value);
                }}
                visibleMaxValue
                visibleMinValue
                visibleValue
                customVisibleMaxValue={(val) => (
                    <Typography font="Inter-R" size={16}>
                        {val}%
                    </Typography>
                )}
                customVisibleMinValue={(val) => (
                    <Typography font="Inter-R" size={16}>
                        {val}%
                    </Typography>
                )}
                customVisibleValue={(val) => (
                    <Typography font="Inter-R" size={16}>
                        {val}%
                    </Typography>
                )}
            />
            <Typography font="Inter-M" size={18} tag="h4">
                Кэшбек для покупателя ={" "}
                <span>{(price * (Number(cashback) / 100)).toFixed(2)} ₽</span>
            </Typography>
        </section>
    );
};

export { CreateAdvertisementCashback };
