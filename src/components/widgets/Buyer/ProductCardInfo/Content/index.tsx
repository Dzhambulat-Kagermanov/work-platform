"use client";
import { FC, memo } from "react";
import { TClassName, TProductItemProps } from "@/types";
import { cn } from "@/lib";
import { ContentHead } from "../ContentHead";
import { ContentSales } from "../ContentSales";
import { ContentActions } from "../ContentActions";
import { ContentShop } from "../ContentShop";
import { useScreen } from "@/hooks";
import { SM_BIG, SM_MID } from "@/constants";
import cls from "./index.module.scss";
import Product from "@/types/api/Product";

interface Props extends TClassName {
    product: Product;
}

const Content: FC<Props> = memo(({ className, product }) => {
    const width = useScreen();

    return (
        <section className={cn(cls.content, [className])}>
            {/* {data && (
                    <>
                        <ContentHead
                            salesman={data}
                            className={cn(cls.head)}
                            name={name}
                            price={price}
                            tooltip={tooltip}
                        />
                        {width > SM_BIG && (
                            <ContentSales
                                className={cn(cls.sales)}
                                salesman={data}
                            />
                        )}
                    </>
                )} */}
            <ContentActions id={product.id} className={cn(cls.actions)} />
            {width > SM_MID && (
                <ContentShop
                    salesmanId={product.user_id}
                    shopName={product.shop.legal_name}
                    rating={product.product.rating}
                    className={cn(cls.shop)}
                />
            )}
        </section>
    );
});

export { Content };
