import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { PRODUCTS } from "../constants/products";
import { ProductItem } from "@/components/entities/ProductItem";
import Link from "next/link";
import cls from "./index.module.scss";

interface Props extends TClassName {}
const Content: FC<Props> = ({ className }) => {
    return (
        <ul className={cn(cls.group, [className])}>
            {PRODUCTS.map(
                ({
                    id,
                    images,
                    name,
                    previewImage,
                    price,
                    productDescription,
                    quantities,
                    salesmanId,
                    isFavorite,
                    tooltip,
                }) => {
                    return (
                        <Link href={`/buyer/products/${id}`} key={id}>
                            <ProductItem
                                image={previewImage}
                                name={name}
                                price={price}
                                isFavorite={isFavorite}
                                quantities={quantities}
                                tooltip={tooltip}
                                tag="li"
                                wrapperCls={cn(cls.item)}
                            />
                        </Link>
                    );
                },
            )}
        </ul>
    );
};

export { Content };
