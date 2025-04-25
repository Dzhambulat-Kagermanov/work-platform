import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { Container, Typography } from "@/components/ui";
import { salesmanProducts } from "@/constants/stub"; // Using the same products for demo
import { ProductItem } from "@/components/entities/ProductItem";
import Link from "next/link";
import cls from "./index.module.scss";

interface Props extends TClassName {}
const BuyerProducts: FC<Props> = ({ className }) => {
    return (
        <section className={cn(cls.wrapper, [className])}>
            <Typography
                font="Inter-B"
                size={25}
                tag="h2"
                className={cn(cls.title)}
            >
                Избранные товары
            </Typography>
            <div className={cn(cls.products_container)}>
                <ul className={cn(cls.group)}>
                    {salesmanProducts.slice(0, 4).map(
                        ({
                            id,
                            previewImage,
                            name,
                            price,
                            productDescription,
                            quantities,
                            isFavorite,
                            tooltip,
                        }) => {
                            return (
                                <li key={id} className={cn(cls.item_wrapper)}>
                                    <Link href={`/buyer/products/${id}`} className={cn(cls.item_link)}>
                                        <ProductItem
                                            id={id}
                                            wrapperCls={cn(cls.item)}
                                            image={previewImage}
                                            name={name}
                                            price={price}
                                            quantities={quantities}
                                            tag="div"
                                            tooltip={tooltip}
                                        />
                                    </Link>
                                </li>
                            );
                        },
                    )}
                </ul>
            </div>
        </section>
    );
};

export { BuyerProducts };
