import { ProductCardPage } from "@/components/page/Buyer/ProductCard";
import { apiService } from "@/services";
import { Product } from "@/types/api";

export default function ProductCard({
    product,
}: {
    product: Awaited<ReturnType<typeof apiService.products.getProductItem>>;
}) {
    return <ProductCardPage product={product as Product} />;
}

export const getServerSideProps = async (context: any) => {
    const product = await apiService.products.getProductItem(
        context.params.card,
    );
    if (!product) {
        return { notFound: true };
    }
    return { props: { product } };
};
