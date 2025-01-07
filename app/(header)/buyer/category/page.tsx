import { CategoryPage } from "@/components/page/Buyer/Category";
import { CategoryItemPage } from "@/components/page/Buyer/CategoryItem";
import { CategorySelectSubcategory } from "@/components/widgets/Buyer/CategorySelectSubcategory";
import { FC } from "react";

interface Props {
    searchParams: Promise<{ slug?: string; subcategory?: string }>;
}
const Category: FC<Props> = async ({ searchParams }) => {
    const { slug, subcategory } = await searchParams;

    return slug ? (
        subcategory ? (
            <CategoryItemPage slug={slug} subcategory={subcategory} />
        ) : (
            <CategorySelectSubcategory slug={slug} subcategory={subcategory} />
        )
    ) : (
        <CategoryPage />
    );
};

export default Category;
