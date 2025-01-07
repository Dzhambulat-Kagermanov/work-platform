import { FC } from "react";
import { TClassName } from "@/types";
import { Container } from "@/components/ui";
import { cn } from "@/lib";
import { SUBCATEGORIES } from "../CategoryItemSidebar/constants/subcategories";
import { Item } from "./Item";
import cls from "./index.module.scss";

interface Props extends TClassName {
    slug: string;
}
const CategoryItemSubcategories: FC<Props> = ({ className, slug }) => {
    return (
        <Container tag="section" className={cn(cls.wrapper, [className])}>
            <ul className={cn(cls.group)}>
                {SUBCATEGORIES.map(({ productsQnt, title }) => {
                    return (
                        <Item
                            key={title}
                            productsQnt={productsQnt}
                            slug={slug}
                            title={title}
                            className={cn(cls.item)}
                        />
                    );
                })}
            </ul>
        </Container>
    );
};

export { CategoryItemSubcategories };
