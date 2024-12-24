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
	tooltip?: string
	salesman: {
		id: number
		rating: number
		productsWithCashback: number
		boughtOut: number
	}
	productDescription: string
}
