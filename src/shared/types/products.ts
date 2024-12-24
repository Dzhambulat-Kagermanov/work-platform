export type TProductItemProps = {
	id: number
	isFavorite?: boolean
	name: string
	quantities: number
	previewImage: string
	images: string[]
	price: {
		price: number
		discount?: number
	}
	tip?: string
	salesman: {
		rating: number
		productsWithCashback: number
		boughtOut: number
	}
	productDescription: string
}
