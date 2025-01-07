import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { Checkbox, Typography } from "@/components/ui";
import cls from "./index.module.scss";

interface Props extends TClassName {}
const EditAdvertisementFeature: FC<Props> = ({ className }) => {
    return (
        <section className={cn(cls.wrapper, [className])}>
            <Checkbox className={cn(cls.checkbox)} />
            <Typography font="Inter-M" size={14} tag="h3">
                1 товар из магазина на 1 аккаунт покупателя
                <br />
                <Typography font="Inter-R" size={14} tag="span">
                    Активируйте функцию если хотите скрыть все товары магазина
                    для покупателей которые уже купили у вас какой-либо товар.{" "}
                </Typography>
            </Typography>
        </section>
    );
};

export { EditAdvertisementFeature };
