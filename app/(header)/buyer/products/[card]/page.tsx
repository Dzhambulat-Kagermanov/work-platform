import { ProductCardPage } from "@/components/page/Buyer/ProductCard"
import { notFound } from "next/navigation"
import { FC } from "react"
import { apiService } from "@/services"
interface Props {
    params: Promise<{ card: string }>
}

const ProductCard: FC<Props> = async ({ params }) => {
    const { card } = await params

    const product = await apiService.products.getProductItem(card)

    console.log(product)

    if (!product) return notFound()

    return <ProductCardPage product={product} />
}

export default ProductCard
