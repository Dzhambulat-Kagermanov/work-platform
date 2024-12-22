export type TGetCashbackProductsQnt = number
export const getCashbackProductsQnt = (): Promise<TGetCashbackProductsQnt> => {
	return new Promise((res, rej) => {
		res(748)
	})
}

export type TGetCashbackProduct = {
	id: number
	isFavorite?: boolean
	name: string
	quantities: number
	image: string
	price: {
		price: number
		discount?: number
	}
	tip?: string
}
export const getCashbackProducts = (): Promise<TGetCashbackProduct[]> => {
	return new Promise((res, rej) => {
		res([
			{
				id: 1,
				image: '/images/stub/product-stub.png',
				isFavorite: true,
				name: 'Рюкзак школьный городск..',
				price: {
					price: 500,
					discount: 20,
				},
				quantities: 221,
				tip: 'Подсказка',
			},
			{
				id: 2,
				image: '/images/stub/product-stub.png',
				isFavorite: undefined,
				name: 'Рюкзак школьный городск..',
				price: {
					price: 200,
					discount: 30,
				},
				quantities: 21,
				tip: 'Подсказка',
			},
			{
				id: 3,
				image: '/images/stub/product-stub.png',
				isFavorite: false,
				name: 'Рюкзак школьный городск..',
				price: {
					price: 650,
					discount: 0,
				},
				quantities: 21,
				tip: 'Подсказка',
			},
			{
				id: 4,
				image: '/images/stub/product-stub.png',
				isFavorite: true,
				name: 'Рюкзак школьный городск..',
				price: {
					price: 500,
					discount: 20,
				},
				quantities: 221,
				tip: 'Подсказка',
			},
			{
				id: 5,
				image: '/images/stub/product-stub.png',
				isFavorite: undefined,
				name: 'Рюкзак школьный городск..',
				price: {
					price: 200,
					discount: 30,
				},
				quantities: 21,
				tip: 'Подсказка',
			},
			{
				id: 6,
				image: '/images/stub/product-stub.png',
				isFavorite: false,
				name: 'Рюкзак школьный городск..',
				price: {
					price: 650,
					discount: 0,
				},
				quantities: 21,
				tip: 'Подсказка',
			},
			{
				id: 7,
				image: '/images/stub/product-stub.png',
				isFavorite: true,
				name: 'Рюкзак школьный городск..',
				price: {
					price: 500,
					discount: 20,
				},
				quantities: 221,
				tip: 'Подсказка',
			},
			{
				id: 8,
				image: '/images/stub/product-stub.png',
				isFavorite: undefined,
				name: 'Рюкзак школьный городск..',
				price: {
					price: 200,
					discount: 30,
				},
				quantities: 21,
				tip: 'Подсказка',
			},
			{
				id: 9,
				image: '/images/stub/product-stub.png',
				isFavorite: false,
				name: 'Рюкзак школьный городск..',
				price: {
					price: 650,
					discount: 0,
				},
				quantities: 21,
				tip: 'Подсказка',
			},
			{
				id: 10,
				image: '/images/stub/product-stub.png',
				isFavorite: true,
				name: 'Рюкзак школьный городск..',
				price: {
					price: 500,
					discount: 20,
				},
				quantities: 221,
				tip: 'Подсказка',
			},
			{
				id: 11,
				image: '/images/stub/product-stub.png',
				isFavorite: undefined,
				name: 'Рюкзак школьный городск..',
				price: {
					price: 200,
					discount: 30,
				},
				quantities: 21,
				tip: 'Подсказка',
			},
			{
				id: 12,
				image: '/images/stub/product-stub.png',
				isFavorite: false,
				name: 'Рюкзак школьный городск..',
				price: {
					price: 650,
					discount: 0,
				},
				quantities: 21,
				tip: 'Подсказка',
			},
			{
				id: 13,
				image: '/images/stub/product-stub.png',
				isFavorite: true,
				name: 'Рюкзак школьный городск..',
				price: {
					price: 500,
					discount: 20,
				},
				quantities: 221,
				tip: 'Подсказка',
			},
			{
				id: 14,
				image: '/images/stub/product-stub.png',
				isFavorite: undefined,
				name: 'Рюкзак школьный городск..',
				price: {
					price: 200,
					discount: 30,
				},
				quantities: 21,
				tip: 'Подсказка',
			},
			{
				id: 15,
				image: '/images/stub/product-stub.png',
				isFavorite: false,
				name: 'Рюкзак школьный городск..',
				price: {
					price: 650,
					discount: 0,
				},
				quantities: 21,
				tip: 'Подсказка',
			},
		])
	})
}
