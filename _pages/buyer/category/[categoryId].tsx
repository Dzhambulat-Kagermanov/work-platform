import { CategoryItemPage } from "@/components/page/Buyer/CategoryItem";

export default function CategoryItem({
    categoryId,
    subcategory,
}: {
    categoryId: string;
    subcategory: string;
}) {
    return (
        <CategoryItemPage categoryId={categoryId} subcategory={subcategory} />
    );
}

export const getServerSideProps = async (context: any) => {
    return {
        props: {
            categoryId: context.params.categoryId,
            subcategory: context.query.subcategory,
        },
    };
};
