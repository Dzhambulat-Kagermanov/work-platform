import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { CATEGORIES } from "./constants/categories";
import cls from "./index.module.scss";
import { CategoryItem as CategoryItemType } from "@/types/api";
import { CategoryItem } from "@/components/entities/CategoryItem";

interface Props extends TClassName {
    categories: CategoryItemType[];
}
const CategoryCategories: FC<Props> = ({ categories, className }) => {
    return (
        <ul className={cn(cls.wrapper, [className])}>
            {categories.map((item, key) => {
                return (
                    <CategoryItem
                        key={key}
                        tag="li"
                        image={item.img?.src ?? ""}
                        productsQnt={item.product_count}
                        title={item.category_name}
                        categoryId={item.category_id}
                        className={cn(cls.item)}
                        titleCls={cn(cls.item_title)}
                        plaqueCls={cn(cls.item_plaque)}
                    />
                );
            })}
        </ul>
    );
};

export { CategoryCategories };
