"use client";
import { FC } from "react";
import { TClassName } from "@/types";
import { Container } from "@/components/ui";
import { cn } from "@/lib";
import cls from "./index.module.scss";
import { favoriteProducts } from "@/constants/stub";
import { ProductItem } from "@/components/entities/ProductItem";
import Link from "next/link";
import { useGetFavoritesQuery } from "@/hooks/api/favorites";

interface Props extends TClassName {}
const FavoritesProducts: FC<Props> = ({ className }) => {
    const { data: favoritesData } = useGetFavoritesQuery();
    if (!favoritesData || !favoritesData.length) {
        return (
            <div className="flex items-center justify-center text-center h-[80dvh] min-h-[250px]">
                Товары не найдены
            </div>
        )
    }
    return (
        <Container tag="section" className={cn(cls.wrapper, [className])}>
            <ul className={cn(cls.group)}>
                {favoritesData.map(
                    (item, index) => {
                        return (
                            <Link
                                href={`/buyer/products/${item.id}`}
                                key={index}
                                className={cn(cls.link)}
                            >
                                <ProductItem
                                    wrapperCls={cn(cls.item)}
                                    image={item.product.images.length ? item.product.images[0] : ""}
                                    name={item.product.name}
                                    price={{
                                        price: Number(item.product.price),
                                        discount: Number(item.product.discount)
                                    }}
                                    quantities={item.quantity}
                                    tag="li"
                                    tooltip={""}
                                />
                            </Link>
                        );
                    },
                )}
            </ul>
        </Container>
    );
};

export { FavoritesProducts };
