import { FC } from "react";
import { cn } from "@/lib";
import { TClassName } from "@/types";
import { Typography } from "@/components/ui";
import cls from "./index.module.scss";

interface Props extends TClassName {}
const EditAdvertisementStatistic: FC<Props> = ({ className }) => {
    return (
        <section className={cn(cls.wrapper, [className])}>
            <div className={cn(cls.head)}>
                <Typography font="Inter-SB" size={18} tag="h2">
                    Статистика:
                </Typography>
                <Typography font="Inter-R" size={16} tag="time">
                    21 мая - 26 мая
                </Typography>
            </div>
            <div className={cn(cls.content)}>
                <ul className={cn(cls.group)}>
                    <li className={cn(cls.item)}>
                        <Typography font="Inter-R" size={14} tag="h2">
                            Дата создания
                        </Typography>
                        <Typography
                            font="Inter-M"
                            size={14}
                            tag="time"
                            className={cn(cls.info)}
                        >
                            21 мая в 14:14
                        </Typography>
                    </li>
                    <li className={cn(cls.item)}>
                        <Typography font="Inter-R" size={14} tag="h2">
                            Просмотров объявления:
                        </Typography>
                        <Typography
                            font="Inter-M"
                            size={14}
                            tag="h3"
                            className={cn(cls.info)}
                        >
                            10300
                        </Typography>
                    </li>
                    <li className={cn(cls.item)}>
                        <Typography font="Inter-R" size={14} tag="h2">
                            Добавили в избранное:
                        </Typography>
                        <Typography
                            font="Inter-M"
                            size={14}
                            tag="h3"
                            className={cn(cls.info)}
                        >
                            840
                        </Typography>
                    </li>
                </ul>
                <ul className={cn(cls.group)}>
                    <li className={cn(cls.item)}>
                        <Typography font="Inter-R" size={14} tag="h2">
                            Выкуплено:
                        </Typography>
                        <Typography
                            font="Inter-M"
                            size={14}
                            tag="h3"
                            className={cn(cls.info)}
                        >
                            75 шт. / 100 шт
                        </Typography>
                    </li>
                    <li className={cn(cls.item)}>
                        <Typography font="Inter-R" size={14} tag="h2">
                            Потрачено:
                        </Typography>
                        <Typography
                            font="Inter-M"
                            size={14}
                            tag="h3"
                            className={cn(cls.info)}
                        >
                            4000 р / 5000 р
                        </Typography>
                    </li>
                    <li className={cn(cls.item)}>
                        <Typography font="Inter-R" size={14} tag="h2">
                            Баланс:
                        </Typography>
                        <Typography
                            font="Inter-M"
                            size={14}
                            tag="h3"
                            className={cn(cls.info)}
                        >
                            1000 р
                        </Typography>
                    </li>
                    <li className={cn(cls.item)}>
                        <Typography font="Inter-R" size={14} tag="h2">
                            В сделках:
                        </Typography>
                        <Typography
                            font="Inter-M"
                            size={14}
                            tag="h3"
                            className={cn(cls.info)}
                        >
                            1000 р
                        </Typography>
                    </li>
                </ul>
                <ul className={cn(cls.group)}>
                    <li className={cn(cls.item)}>
                        <Typography font="Inter-R" size={14} tag="h2">
                            Конверсия
                        </Typography>
                        <Typography
                            font="Inter-M"
                            size={14}
                            tag="h3"
                            className={cn(cls.info)}
                        >
                            4%
                        </Typography>
                    </li>
                </ul>
                <ul className={cn(cls.group)}>
                    <li className={cn(cls.item)}>
                        <Typography font="Inter-R" size={14} tag="h2">
                            Переходов по прямой ссылке / выкупов по прямой
                            ссылке
                        </Typography>
                        <Typography
                            font="Inter-M"
                            size={14}
                            tag="h3"
                            className={cn(cls.info)}
                        >
                            103 / 52
                        </Typography>
                    </li>
                    <li className={cn(cls.item)}>
                        <Typography font="Inter-R" size={14} tag="h2">
                            Переходов с сайта / выкупов с сайта
                        </Typography>
                        <Typography
                            font="Inter-M"
                            size={14}
                            tag="h3"
                            className={cn(cls.info)}
                        >
                            737 / 158
                        </Typography>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export { EditAdvertisementStatistic };
