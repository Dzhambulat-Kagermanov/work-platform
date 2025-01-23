import { FC } from "react";
import { TClassName } from "@/types";
import { AdvertisementProductCard } from "@/components/entities/AdvertisementProductCard";
import { DiscountPlaque, Typography } from "@/components/ui";
import { cn } from "@/lib";
import cls from "./index.module.scss";

interface Props extends TClassName {}
const CreateAdvertisementCardInfo: FC<Props> = ({ className }) => {
    return (
        <section className={cn(cls.wrapper, [className])}>
            <AdvertisementProductCard
                className={cn(cls.card)}
                image="/images/stub/product-stub-3.png"
                name="Ночник звездное небо проектор космонавт детский"
                number="188377924"
                owner="/ ИП Силкина В.В."
            />
            <div className={cn(cls.plaques)}>
                <DiscountPlaque
                    className={cn(cls.plaque)}
                    customContent={(val) => `${val}`}
                    customColor="green"
                >
                    Активно
                </DiscountPlaque>
                <DiscountPlaque className={cn(cls.plaque)}>{50}</DiscountPlaque>
                <DiscountPlaque
                    className={cn(cls.plaque)}
                    customContent={(val) => `${val} P`}
                    customColor="purple"
                >
                    {568}
                </DiscountPlaque>
            </div>
            <Typography font="Inter-R" size={16} tag="h3">
                Цена на Wildberries: <span>800 Р</span>
            </Typography>
        </section>
    );
};

export { CreateAdvertisementCardInfo };
