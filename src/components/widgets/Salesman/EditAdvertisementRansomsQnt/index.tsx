import { FC, MouseEventHandler, useState } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { Typography } from "@/components/ui";
import cls from "./index.module.scss";

interface Props extends TClassName {}
const EditAdvertisementRansomsQnt: FC<Props> = ({ className }) => {
    const [count, setCount] = useState<number>(0);

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
                <Typography font="Inter-R" size={17} tag="span">
                    {count}
                </Typography>
                <button
                    onClick={handlePlus}
                    className={cn(cls.btn, [cls.plus])}
                >
                    <Typography font="Inter-R" size={24} tag="span">
                        +
                    </Typography>
                </button>
            </div>
            <Typography font="Inter-R" size={12} tag="h3">
                Доступно выкупов = 0 шт
            </Typography>
        </section>
    );
};

export { EditAdvertisementRansomsQnt };
