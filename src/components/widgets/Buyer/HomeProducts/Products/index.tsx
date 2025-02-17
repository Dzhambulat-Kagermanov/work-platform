"use client";
import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { ProductItem } from "@/components/entities/ProductItem";
import Link from "next/link";
import cls from "./index.module.scss";
import { ROUTES } from "@/constants";
import { useProductsListQuery } from "@/hooks/api/products";
import { PageErrorStub } from "@/components/ui/page-error-stub";
import { PageLoader } from "@/components/ui/loaders";

interface Props extends TClassName {}
const Products: FC<Props> = ({ className }) => {
    const { data: products, isLoading } = useProductsListQuery();

    if (isLoading) {
        return <PageLoader />;
    }

    if (!products || !products.data.length) {
        return <PageErrorStub text="Товары не найдены" />;
    }

    return (
        <ul className={cn(cls.wrapper, [className])}>
            {products.data.map((item, index) => {
                return (
                    <Link
                        href={ROUTES.BUYER.PRODUCTS.ID(item.id.toString())}
                        key={index}
                    >
                        <ProductItem
                            id={item.id}
                            headCls={cn(cls.product_head)}
                            name={item.product.name}
                            tooltip={""}
                            quantities={0}
                            image={item.product.images && item.product.images.length ? item.product.images[0] : ""}
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
