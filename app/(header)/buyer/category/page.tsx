import { CategoryPage } from "@/components/page/Buyer/Category";
import { CategoryItemPage } from "@/components/page/Buyer/CategoryItem";
import { CategorySelectSubcategory } from "@/components/widgets/Buyer/CategorySelectSubcategory";
import { apiService } from "@/services";
import { notFound } from "next/navigation";
import { FC } from "react";

interface Props {
    searchParams: Promise<{ categoryId?: string; subcategory?: string }>;
}

const Category: FC<Props> = async ({ searchParams }) => {
    const { categoryId, subcategory } = await searchParams;

    const categories = await apiService.categories.getCategories();

    if (!categories) {
        return notFound();
    }

    return categoryId ? (
        subcategory ? (
            <CategoryItemPage
                categoryId={categoryId}
                subcategory={subcategory}
            />
        ) : (
            <CategorySelectSubcategory
                slug={categoryId}
                subcategory={subcategory}
            />
        )
    ) : (
        <CategoryPage categories={categories} />
    );
};

export default Category;
