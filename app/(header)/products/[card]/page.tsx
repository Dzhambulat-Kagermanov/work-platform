import { ProductCardPage } from '@/components/page/ProductCard'
import { notFound } from 'next/navigation'
import { FC } from 'react'

interface Props {
	params: Promise<{ card: string }>
}
const ProductCard: FC<Props> = async ({ params }) => {
	const { card } = await params

	if (Number.isNaN(card)) return notFound()

	return <ProductCardPage id={+card} />
}

export default ProductCard
