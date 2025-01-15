"use client";
import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import cls from "./index.module.scss";
import { Container, Typography } from "@/components/ui";
import { CategoryCategories } from "@/components/widgets/Buyer/CategoryCategories";
import { useCategoriesQuery } from "@/hooks/api/categories";
import { PageLoader } from "@/components/ui/loaders";

interface Props extends TClassName {
}
const CategoryPage: FC<Props> = ({ className }) => {

    const { data: categories, isLoading } = useCategoriesQuery();

    if (isLoading) {
        <PageLoader />
    }

    if (!categories || !categories.length) {
        return <></>;
    }
 
    return (
        <main className={cn(cls.category, [className])}>
            <Container
                tag="section"
                className={cn(cls.container, ["modules-gap-top"])}
            >
                {categories && categories.length ? (
                    <>
                        <Typography
                            tag="h1"
                            className={cn(cls.title, ["modules-gap-bottom"])}
                            font="Inter-SB"
                            size={20}
                        >
                            Категории:
                        </Typography>
                        <CategoryCategories
                            categories={categories}
                            className={cn(cls.categories)}
                        />
                    </>
                ) : (
                    <Typography
                        tag="p"
                        className={cn(cls.title, ["modules-gap-bottom"])}
                        font="Inter-SB"
                        size={20}
                    >
                        Категории не найдены
                    </Typography>
                )}
            </Container>
        </main>
    );
};

export { CategoryPage };
