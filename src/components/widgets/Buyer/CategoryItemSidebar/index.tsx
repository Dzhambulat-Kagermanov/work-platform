"use client";
import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { Item } from "./Item";
import { SM_BIG } from "@/constants";
import { useScreen } from "@/hooks";
import cls from "./index.module.scss";
import useSubcategoriesQuery from "@/hooks/api/categories/useSubcategoriesQuery";

interface Props extends TClassName {
    subcategory?: string;
    categoryId: string;
}
const CategoryItemSidebar: FC<Props> = ({
    className,
    subcategory,
    categoryId,
}) => {
    const width = useScreen();

    const { data: subcategories } = useSubcategoriesQuery(
        categoryId ? +categoryId : -1,
    );

    return (
        <>
            {width > SM_BIG && (
                <aside className={cn(cls.wrapper, [className])}>
                    {subcategories && subcategories.length ? (
                        <ul className={cn(cls.group)}>
                            {subcategories.map((item) => {
                                return (
                                    <Item
                                        subcategory={subcategory}
                                        linkCls={cn(cls.link)}
                                        productsQnt={item.product_count}
                                        id={item.category_id}
                                        title={item.category_name}
                                        className={cn(cls.item)}
                                        key={item.category_name}
                                        categoryId={categoryId}
                                    />
                                );
                            })}
                        </ul>
                    ) : (
                        <></>
                    )}
                </aside>
            )}
        </>
    );
};

export { CategoryItemSidebar };
