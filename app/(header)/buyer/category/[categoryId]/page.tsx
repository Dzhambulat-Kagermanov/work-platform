import { CategoryItemPage } from "@/components/page/Buyer/CategoryItem";
import { FC } from "react";

interface Props {
    searchParams: Promise<{
        categoryId: string;
        subcategory: string;
    }>;
}
const CategoryItem: FC<Props> = async ({ searchParams }) => {
    const { categoryId, subcategory } = await searchParams;

    return (
        <CategoryItemPage categoryId={categoryId} subcategory={subcategory} />
    );
};

export default CategoryItem;
