import { FC } from "react";
import { TClassName, TSalesmanStatistic } from "@/types";
import { cn } from "@/lib";
import { AccountStatisticItem } from "@/components/entities/AccountStatisticItem";
import cls from "./index.module.scss";
import { Container } from "@/components/ui";

interface Props extends TClassName, TSalesmanStatistic {}
const SalesmanStatistic: FC<Props> = ({
    className,
    cashbackPaid,
    productsGrate,
    productsRating,
    successfulBuybacks,
}) => {
    return (
        <Container tag="section" className={cn(cls.wrapper, [className])}>
            <ul className={cn(cls.group)}>
                <AccountStatisticItem
                    isTitleGreen
                    subtitle="Успешных выкупов"
                    title={`${successfulBuybacks}%`}
                    contentCls={cn(cls.content)}
                    className={cn(cls.item)}
                    tag="li"
                />
                <AccountStatisticItem
                    subtitle="Кэшбека выплачено"
                    title={`${cashbackPaid} ₽`}
                    contentCls={cn(cls.content)}
                    className={cn(cls.item)}
                    tag="li"
                />
                <AccountStatisticItem
                    subtitle="Рейтинг товаров"
                    title={productsRating}
                    contentCls={cn(cls.content)}
                    className={cn(cls.item)}
                    tag="li"
                />
                <AccountStatisticItem
                    isTitleGreen
                    subtitle="Оценок товаров"
                    title={productsGrate}
                    contentCls={cn(cls.content)}
                    className={cn(cls.item)}
                    tag="li"
                />
            </ul>
        </Container>
    );
};

export { SalesmanStatistic };
