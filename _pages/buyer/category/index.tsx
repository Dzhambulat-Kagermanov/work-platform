import { CategoryPage } from "@/components/page/Buyer/Category";
import { CategoryItemPage } from "@/components/page/Buyer/CategoryItem";
import { CategorySelectSubcategory } from "@/components/widgets/Buyer/CategorySelectSubcategory";

export default function Category({
    categoryId,
    subcategory,
}: {
    categoryId?: string;
    subcategory?: string;
}) {
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
}

export const getServerSideProps = async (context: any) => {
    return {
        props: {
            categoryId: context.query.categoryId || null,
            subcategory: context.query.subcategory || null,
        },
    };
};
