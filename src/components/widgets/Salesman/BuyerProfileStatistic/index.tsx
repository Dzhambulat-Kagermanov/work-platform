import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { AccountStatisticItem } from "@/components/entities/AccountStatisticItem";
import cls from "./index.module.scss";

interface Props extends TClassName {}
const BuyerProfileStatistic: FC<Props> = ({ className }) => {
    return (
        <ul className={cn(cls.wrapper, [className])}>
            <AccountStatisticItem
                titleCls={cn(cls.title)}
                subtitle="Успешных выкупов"
                title={`${91}%`}
                isTitleGreen
                className={cn(cls.item)}
            />
            <AccountStatisticItem
                titleCls={cn(cls.title)}
                subtitle="Всего выкупов"
                title={12}
                className={cn(cls.item)}
            />
        </ul>
    );
};

export { BuyerProfileStatistic };
