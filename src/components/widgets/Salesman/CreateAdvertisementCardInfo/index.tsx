import { FC } from "react";
import { TClassName } from "@/types";
import { AdvertisementProductCard } from "@/components/entities/AdvertisementProductCard";
import { DiscountPlaque, Typography } from "@/components/ui";
import { cn } from "@/lib";
import cls from "./index.module.scss";
import { WbProduct } from "@/types/api/Product";

interface Props extends TClassName {
    product: WbProduct;
}
const CreateAdvertisementCardInfo: FC<Props> = ({ className, product, }) => {
    return (
        <section className={cn(cls.wrapper, [className])}>
            <AdvertisementProductCard
                className={cn(cls.card)}
                image={product.images[0] ?? ""}
                name={product.name}
                number=""
                owner={""}
            />
            {/* <div className={cn(cls.plaques)}>
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
            </div> */}
            <Typography font="Inter-R" size={16} tag="h3">
                Цена на Wildberries: <span>{product.price} Р</span>
            </Typography>
        </section>
    );
};

export { CreateAdvertisementCardInfo };
