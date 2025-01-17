"use client";
import { FC } from "react";
import { TClassName, TProductItemProps } from "@/types";
import { cn } from "@/lib";
import { Typography } from "@/components/ui";
import { ProductItem } from "@/components/entities/ProductItem";
import Link from "next/link";
import cls from "./index.module.scss";
import { useProductsRelatedQuery } from "@/hooks/api/products";
import { ROUTES } from "@/constants";

interface Props extends TClassName, Pick<TProductItemProps, "id"> {}
const SimilarProducts: FC<Props> = ({ id, className }) => {
    const { data, isLoading, isError } = useProductsRelatedQuery(`${id}`);

    if (isLoading || isError || !data || !data.length) {
        return <></>;
    }

    return (
        <div className={cn(cls.wrapper, [className])}>
            <Typography
                font="Inter-B"
                size={25}
                className={cn(cls.title)}
                tag="h2"
            >
                Смотрите также
            </Typography>
            <ul className={cn(cls.group)}>
                {data.map((item, index) => {
                    return (
                        <Link
                            href={ROUTES.BUYER.PRODUCTS.ID(`${item.id}`)}
                            key={index}
                        >
                            <ProductItem
                                id={id}
                                tag="li"
                                wrapperCls={cn(cls.item)}
                                image={
                                    item.product.images.length
                                        ? item.product.images[0]
                                        : null
                                }
                                name={item.product.name}
                                price={{
                                    price: item.price_without_cashback,
                                    discount: +item.product.discount,
                                }}
                                tooltip={""}
                            />
                        </Link>
                    );
                })}
            </ul>
        </div>
    );
};

export { SimilarProducts };
