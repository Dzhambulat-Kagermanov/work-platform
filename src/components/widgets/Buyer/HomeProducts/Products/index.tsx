"use client";
import { FC, useState } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { ProductItem } from "@/components/entities/ProductItem";
import Link from "next/link";
import cls from "./index.module.scss";
import { apiService } from "@/services";
import { ROUTES } from "@/constants";
import Product from "@/types/api/Product";
import { useProductsListQuery } from "@/hooks/api/products";

interface Props extends TClassName {}
const Products: FC<Props> = ({ className }) => {

    const { data: products } = useProductsListQuery();

    if (!products || !products.length) {
        return <></>;
    }

    return (
        <ul className={cn(cls.wrapper, [className])}>
            {products.map((item, index) => {
                return (
                    <Link
                        href={ROUTES.BUYER.PRODUCTS.ID(item.id.toString())}
                        key={index}
                    >
                        <ProductItem
                            headCls={cn(cls.product_head)}
                            name={item.product.name}
                            tooltip={""}
                            quantities={0}
                            image={""}
                            price={{
                                price: Number(item.price_with_cashback),
                                discount: Number(item.product.discount),
                            }}
                        />
                    </Link>
                );
            })}
        </ul>
    );
};

export { Products };
