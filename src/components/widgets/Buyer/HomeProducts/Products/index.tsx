import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { ProductItem } from "@/components/entities/ProductItem";
import Link from "next/link";
import cls from "./index.module.scss";
import { apiService } from "@/services";
import { ROUTES } from "@/constants";

interface Props extends TClassName {}
const Products: FC<Props> = async ({ className }) => {
    const products = await apiService.products.getProductsList([]);

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
