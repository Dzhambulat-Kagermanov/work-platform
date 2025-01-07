"use client";
import { FC } from "react";
import { TClassName } from "@/types";
import { BreadCrumbs, Container } from "@/components/ui";
import { cn } from "@/lib";
import cls from "./index.module.scss";
import { useScreen } from "@/hooks";
import { SM_BIG } from "@/constants";

interface Props extends TClassName {
    slug: string;
    subcategory?: string;
}
const CategoryItemCrumbs: FC<Props> = ({ className, slug, subcategory }) => {
    const width = useScreen();
    const items = [
        {
            link: "/buyer/category",
            text: "Категории",
        },
        {
            link: width > SM_BIG ? "#" : `/buyer/category?slug=${slug}`,
            text: slug,
        },
    ];
    if (subcategory)
        items.push({
            link: `/buyer/category?slug=${slug}&subcategory=${subcategory}`,
            text: subcategory,
        });

    return (
        <Container tag="section" className={cn(cls.wrapper, [className])}>
            <BreadCrumbs items={items} />
        </Container>
    );
};

export { CategoryItemCrumbs };
