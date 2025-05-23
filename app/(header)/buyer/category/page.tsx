import { CategoryPage } from "@/components/page/Buyer/Category";
import { CategoryItemPage } from "@/components/page/Buyer/CategoryItem";
import { CategorySelectSubcategory } from "@/components/widgets/Buyer/CategorySelectSubcategory";
import { FC } from "react";

interface Props {
    searchParams: Promise<{ categoryId?: string; subcategory?: string }>;
}

const Category: FC<Props> = async ({ searchParams }) => {
    const { categoryId, subcategory } = await searchParams;

    return categoryId ? (
        subcategory ? (
            <CategoryItemPage
                categoryId={categoryId}
                subcategory={subcategory}
            />
        ) : (
            <CategorySelectSubcategory
                categoryId={categoryId}
                subcategory={subcategory}
            />
        )
    ) : (
        <CategoryPage />
    );
};

export default Category;
