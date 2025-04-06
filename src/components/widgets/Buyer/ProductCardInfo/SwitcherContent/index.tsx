"use client";
import { FC } from "react";
import { TClassName, TProductItemProps } from "@/types";
import { cn } from "@/lib";
import { TContentType } from "../Switcher";
import { Description } from "./Description";
import { Conditions } from "./Conditions";
import { Reviews } from "./Reviews";
import { useScreen } from "@/hooks";
import { SM_MID } from "@/constants";
import { Typography } from "@/components/ui";
import { ContentShop } from "../ContentShop";
import cls from "./index.module.scss";
import Product from "@/types/api/Product";

interface Props extends TClassName, Pick<TProductItemProps, "salesmanId"> {
    contentType: TContentType;
    product: Product;
}
const SwitcherContent: FC<Props> = ({
    salesmanId,
    contentType,
    className,
    product,
}) => {
    const width = useScreen();

    return (
        <div className={cn(cls.wrapper, [className])}>
            {width > SM_MID ? (
                contentType === "conditions" ? (
                    <Conditions
                        order_conditions={product.order_conditions}
                        className={cn(cls.content, [cls.conditions])}
                    />
                ) : contentType === "description" ? (
                    <Description
                        productDescription={product.product.description}
                        className={cn(cls.content, [cls.description])}
                    />
                ) : (
                    <Reviews
                        reviews={product.reviews}
                        className={cn(cls.reviews)}
                        itemCls={cn(cls.content)}
                    />
                )
            ) : (
                <>
                    <div className={cn(cls.content_wrapper)}>
                        <Typography
                            font="Inter-M"
                            size={14}
                            className={cn(cls.title)}
                            tag="h2"
                        >
                            Условия заказа
                        </Typography>
                        <Conditions
                            order_conditions={product.order_conditions}
                            className={cn(cls.content, [cls.conditions])}
                        />
                    </div>
                    <div className={cn(cls.content_wrapper)}>
                        <Typography
                            font="Inter-M"
                            size={14}
                            className={cn(cls.title)}
                            tag="h2"
                        >
                            Описание товара
                        </Typography>
                        <Description
                            productDescription={product.product.description}
                            className={cn(cls.content, [cls.description])}
                        />
                    </div>
                    <ContentShop
                        shopName={product.shop.legal_name}
                        rating={product.product.rating}
                        salesmanId={salesmanId}
                        className={cn(cls.salesman_info, [cls.content_wrapper])}
                    />
                    <div className={cn(cls.content_wrapper)}>
                        <Typography
                            font="Inter-M"
                            size={14}
                            className={cn(cls.title)}
                            tag="h2"
                        >
                            Отзывы ({product.reviews.length})
                        </Typography>
                        <Reviews
                            reviews={product.reviews}
                            className={cn(cls.reviews)}
                            itemCls={cn(cls.content)}
                        />
                    </div>
                </>
            )}
        </div>
    );
};

export { SwitcherContent };
