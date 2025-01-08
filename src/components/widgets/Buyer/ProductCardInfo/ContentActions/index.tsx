import { FC } from "react";
import { TClassName, TProductItemProps } from "@/types";
import { cn } from "@/lib";
import { ProductCardAddFavorite } from "@/components/features/ProductCardAddFavorite";
import { ProductCardOrder } from "@/components/features/ProductCardOrder";
import cls from "./index.module.scss";

interface Props extends TClassName, Pick<TProductItemProps, "id"> {}
const ContentActions: FC<Props> = ({ id, className }) => {
    return (
        <div className={cn(cls.wrapper, [className])}>
            <ProductCardAddFavorite
                id={id}
                className={cn(cls.btn, [cls.favorite])}
            />
            <ProductCardOrder id={id} className={cn(cls.btn, [cls.order])} />
        </div>
    );
};

export { ContentActions };
