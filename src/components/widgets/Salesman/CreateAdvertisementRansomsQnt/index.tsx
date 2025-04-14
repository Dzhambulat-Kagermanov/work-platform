"use client";
import { FC, MouseEventHandler } from "react";
import { TClassName, TState } from "@/types";
import { cn } from "@/lib";
import { Typography } from "@/components/ui";
import cls from "./index.module.scss";
import { useGetBalanceQuery } from "@/hooks/api/auth";

interface Props extends TClassName {
    count: number;
    setCount: TState<number>;
}
const CreateAdvertisementRansomsQnt: FC<Props> = ({
    className,
    count,
    setCount,
}) => {
    const { data: balance } = useGetBalanceQuery();

    const availableRedemptions = balance?.redemption_count ?? 0;

    const handleMinus: MouseEventHandler = () => {
        setCount((cur) => cur - 1);
    };
    const handlePlus: MouseEventHandler = () => {
        setCount((cur) => cur + 1);
    };

    return (
        <section className={cn(cls.wrapper, [className])}>
            <Typography font="Inter-M" size={14} tag="h2">
                Кол-во выкупов
            </Typography>
            <div className={cn(cls.counter)}>
                <button
                    onClick={handleMinus}
                    className={cn(cls.btn, [cls.minus])}
                    disabled={count - 1 < 0}
                >
                    <Typography font="Inter-R" size={24} tag="span">
                        -
                    </Typography>
                </button>

                <input
                    type="number"
                    value={count}
                    className={cls.input}
                    onChange={(event) => {
                        setCount(+event.target.value);
                    }}
                />
                <button
                    onClick={handlePlus}
                    className={cn(cls.btn, [cls.plus])}
                    disabled={count + 1 > availableRedemptions}
                >
                    <Typography font="Inter-R" size={24} tag="span">
                        +
                    </Typography>
                </button>
            </div>
            <Typography font="Inter-R" size={12} tag="h3">
                Доступно выкупов = {availableRedemptions} шт
            </Typography>
        </section>
    );
};

export { CreateAdvertisementRansomsQnt };
