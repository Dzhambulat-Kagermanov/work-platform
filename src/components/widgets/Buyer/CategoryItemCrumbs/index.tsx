"use client";
import { FC, useMemo } from "react";
import { TClassName } from "@/types";
import { BreadCrumbs, Container } from "@/components/ui";
import { cn } from "@/lib";
import cls from "./index.module.scss";
import { useScreen } from "@/hooks";
import { ROUTES, SM_BIG } from "@/constants";
import { useCategoriesQuery } from "@/hooks/api/categories";
import useSubcategoriesQuery from "@/hooks/api/categories/useSubcategoriesQuery";

interface Props extends TClassName {
    categoryId: string;
    subcategory?: string;
}
const CategoryItemCrumbs: FC<Props> = ({
    className,
    categoryId,
    subcategory,
}) => {
    const width = useScreen();

    const { data: categories } = useCategoriesQuery();
    const { data: subcategories } = useSubcategoriesQuery(+categoryId);

    const category = useMemo(() => {
        if (!categories) {
            return null;
        }

        const main = categories.find((el) => el.category_id === +categoryId);

        return main;
    }, [categoryId, categories]);

    const subcat = useMemo(() => {
        if (!subcategories || !subcategory) {
            return null;
        }

        return subcategories.find((el) => el.category_id === +subcategory);
    }, [subcategories, subcategory]);

    const items = [
        {
            link: ROUTES.BUYER.CATEGORY,
            text: "Категории",
        },
        ...(category
            ? [
                  {
                      link:
                          width > SM_BIG
                              ? `${ROUTES.BUYER.CATEGORY}?categoryId=${categoryId}&subcategory=-1`
                              : `${ROUTES.BUYER.CATEGORY}?categoryId=${categoryId}`,
                      text: category?.category_name ?? "",
                  },
              ]
            : []),
        ...(subcat
            ? [
                  {
                      link: `${ROUTES.BUYER.CATEGORY}?categoryId=${categoryId}&subcategory=${subcategory}`,
                      text: subcat?.category_name ?? "",
                  },
              ]
            : []),
    ];

    return (
        <Container tag="section" className={cn(cls.wrapper, [className])}>
            <BreadCrumbs items={items} />
        </Container>
    );
};

export { CategoryItemCrumbs };
