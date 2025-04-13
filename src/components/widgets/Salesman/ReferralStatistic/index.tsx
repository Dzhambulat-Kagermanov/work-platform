import { FC } from "react";
import cls from "./index.module.scss";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { Item } from "./Item";

interface Props extends TClassName {}

const ReferralStatistic: FC<Props> = ({ className }) => {
    return (
        <ul className={cn(cls.wrapper, [className])}>
            <Item
                tag="li"
                className={cls.item}
                number={0}
                title="Перешли по ссылке"
            />
            <Item
                tag="li"
                className={cls.item}
                number={0}
                title="Зарегистрировались в сервисе"
            />
            <Item
                tag="li"
                className={cls.item}
                number={0}
                title="Пополнили баланс"
            />
            <Item
                tag="li"
                className={cls.item}
                number={0}
                title="Вы заработали"
            />
        </ul>
    );
};

export { ReferralStatistic };
