"use client";
import { FC } from "react";
import { TClassName } from "@/types";
import { Container } from "@/components/ui";
import { cn } from "@/lib";
import { Item } from "./Item";
import cls from "./index.module.scss";
import useSubcategoriesQuery from "@/hooks/api/categories/useSubcategoriesQuery";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/constants";
import { PageLoader } from "@/components/ui/loaders";

interface Props extends TClassName {
    categoryId: string;
}
const CategoryItemSubcategories: FC<Props> = ({ className, categoryId }) => {
    const { data: subcategories, isLoading } =
        useSubcategoriesQuery(+categoryId);

    const router = useRouter();

    if (isLoading) {
        return <PageLoader />;
    }

    if (!subcategories || !subcategories.length) {
        router.push(
            `${ROUTES.BUYER.CATEGORY}?categoryId=${categoryId}&subcategory=-1`,
        );
        return <></>;
    }
    return (
        <Container tag="section" className={cn(cls.wrapper, [className])}>
            <ul className={cn(cls.group)}>
                {subcategories.map((item) => (
                    <Item
                        key={item.category_name}
                        productsQnt={item.product_count}
                        title={item.category_name}
                        id={item.category_id}
                        categoryId={categoryId}
                        className={cn(cls.item)}
                    />
                ))}
            </ul>
        </Container>
    );
};

export { CategoryItemSubcategories };
