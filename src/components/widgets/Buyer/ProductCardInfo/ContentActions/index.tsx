import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { ProductCardAddFavorite } from "@/components/features/ProductCardAddFavorite";
import { ProductCardOrder } from "@/components/features/ProductCardOrder";
import cls from "./index.module.scss";
import { Product } from "@/types/api";

interface Props extends TClassName {
    product: Product;
}
const ContentActions: FC<Props> = ({ product, className }) => {
    return (
        <div className={cn(cls.wrapper, [className])}>
            <ProductCardAddFavorite
                id={product.id}
                isFavorite={!!product.in_favorite}
                className={cn(cls.btn, [cls.favorite])}
            />
            <ProductCardOrder id={product.id} className={cn(cls.btn, [cls.order])} />
        </div>
    );
};

export { ContentActions };
