'use client'
import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { ProductCardCrumbs } from "@/components/widgets/Buyer/ProductCardCrumbs";
import { ProductCardInfo } from "@/components/widgets/Buyer/ProductCardInfo";
import { PRODUCT } from "./constants/product";
import cls from "./index.module.scss";
import Product from "@/types/api/Product";
import { useCategoriesQuery } from "@/hooks/api/categories";
import { ROUTES } from "@/constants";

interface Props extends TClassName {
    product: Product;
}

const ProductCardPage: FC<Props> = ({ className, product }) => {
    const data = PRODUCT;

    const { data: categories } = useCategoriesQuery();

    const productCategory = categories && categories.length ? categories.find(el => el.category_id === product.product.category_id) : null

    return (
        <main className={cn(cls.main, [className])}>
            <ProductCardCrumbs
                items={[
                    {
                        link: ROUTES.MAIN,
                        text: "Главная",
                    },
                    ...(
                        productCategory ?
                            [{
                                link: `${ROUTES.BUYER.CATEGORY}?categoryId=${productCategory.category_id}`,
                                text: "Кабели и зарядные устройства",
                            }]
                        : 
                            []
                    ),
                    {
                        link: "#",
                        text: product.shop.wb_name,
                    },
                    {
                        link: "#",
                        text: product.name,
                    },
                ]}
                className={cn(cls.crumbs, ["modules-gap-top"])}
            />
            <ProductCardInfo data={data} wrapperClassName={cn(cls.info)} />
        </main>
    );
};

export { ProductCardPage };
