"use client";
import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { Container } from "@/components/ui";
import { CategoryItemCrumbs } from "../CategoryItemCrumbs";
import { CategoryItemSubcategories } from "../CategoryItemSubcategories";
import cls from "./index.module.scss";

interface Props extends TClassName {
    categoryId: string;
    subcategory?: string;
}
const CategorySelectSubcategory: FC<Props> = ({
    className,
    categoryId,
    subcategory,
}) => {
    return (
        <Container tag="section" className={cn(cls.wrapper, [className])}>
            <CategoryItemCrumbs
                subcategory={subcategory}
                categoryId={categoryId}
                className={cn(cls.crumbs, ["modules-gap-top"])}
            />
            <CategoryItemSubcategories
                categoryId={categoryId}
                className={cn(cls.subcategories, [
                    "modules-gap-top",
                    "modules-gap-bottom",
                ])}
            />
        </Container>
    );
};

export { CategorySelectSubcategory };
