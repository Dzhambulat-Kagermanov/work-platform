import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { ProductItem } from "@/components/entities/ProductItem";
import Link from "next/link";
import { PRODUCTS } from "../constants/products";
import cls from "./index.module.scss";
import { apiService } from "@/services";

interface Props extends TClassName {}
const Products: FC<Props> = async ({ className }) => {

    const products = await apiService.products.getProductsList([]);

    if (!products || !products.length) {
        return <></>;
    }

    console.log(products);

    return (
        <ul className={cn(cls.wrapper, [className])}>
            {products.map(
                (item, index) => {
                    return (
                        <Link href={`/buyer/products/${0}`} key={index}>
                            <ProductItem
                                headCls={cn(cls.product_head)}
                                isFavorite={false}
                                name={""}
                                tooltip={""}
                                quantities={0}
                                image={""}
                                price={{
                                    price: 0,
                                    discount: 0,
                                }}
                            />
                        </Link>
                    );
                },
            )}
        </ul>
    );
};

export { Products };
