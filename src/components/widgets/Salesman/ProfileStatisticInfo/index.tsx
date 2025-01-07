import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { AccountContentBlock, Checkbox, Typography } from "@/components/ui";
import cls from "./index.module.scss";

interface Props extends TClassName {}
const ProfileStatisticInfo: FC<Props> = ({ className }) => {
    return (
        <AccountContentBlock
            tag="section"
            title="Статистика"
            className={cn(cls.wrapper, [className])}
            contentWrapperCls={cn(cls.content)}
            contentWrapperTag="ul"
        >
            <Checkbox defaultChecked className={cn(cls.checkbox)} />
            <div className={cn(cls.info)}>
                <Typography font="Inter-M" size={16} tag="h3">
                    1 товар из вашего магазина на 1 аккаунт покупателя
                </Typography>
                <Typography font="Inter-R" size={16} tag="h4">
                    Активируйте функцию если хотите скрыть все товары магазина
                    для покупателей которые уже купили у вас какой-либо товар.
                </Typography>
            </div>
        </AccountContentBlock>
    );
};

export { ProfileStatisticInfo };
