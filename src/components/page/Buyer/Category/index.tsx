import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import cls from "./index.module.scss";
import { Container, Typography } from "@/components/ui";
import { CategoryCategories } from "@/components/widgets/Buyer/CategoryCategories";
import { CategoryItem } from "@/types/api";

interface Props extends TClassName {
    categories: CategoryItem[];
}
const CategoryPage: FC<Props> = ({ categories, className }) => {
    return (
        <main className={cn(cls.category, [className])}>
            <Container
                tag="section"
                className={cn(cls.container, ["modules-gap-top"])}
            >
                {
                    categories && categories.length ?
                        <>
                        <Typography
                            tag="h1"
                            className={cn(cls.title, ["modules-gap-bottom"])}
                            font="Inter-SB"
                            size={20}
                        >
                            Категории:
                        </Typography>
                        <CategoryCategories categories={categories} className={cn(cls.categories)} />
                        </> 
                    : 
                        <Typography
                            tag="p"
                            className={cn(cls.title, ["modules-gap-bottom"])}
                            font="Inter-SB"
                            size={20}
                        >
                            Категории не найдены
                        </Typography>
                }
            </Container>
        </main>
    );
};

export { CategoryPage };
