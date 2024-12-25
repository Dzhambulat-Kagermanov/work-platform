import { TProductItemProps } from '@/shared/types'

export type TGetCashbackProductsQnt = number
export const getCashbackProductsQnt = (): Promise<TGetCashbackProductsQnt> => {
	return new Promise((res, rej) => {
		res(748)
	})
}

type TGetCashbackProducts = TProductItemProps[]
export const getCashbackProducts = (): Promise<TGetCashbackProducts> => {
	return new Promise((res, rej) => {
		res(
			[...Array(18)].map((_, index) => {
				return {
					id: index + 1,
					previewImage: '/images/stub/product-stub.png',
					images: [
						'/images/stub/product-stub.png',
						'/images/stub/product-stub-2.png',
					],
					isFavorite: true,
					name: 'Зарядка для iphone 20W type-c быстрое устройство',
					price: {
						price: (500 * (index + 1)) / (index + 2),
						discount: 20,
					},
					quantities: 221,
					tooltip: 'Подсказка',
					productDescription:
						'Быстрая зарядка для iPhone 20W с разъемом TYPE-C. Представляем Вашему вниманию адаптер быстрой зарядки который сможет зарядить ваш смартфон за считан. Быстрая зарядка для iPhone 20W с разъемом TYPE-C. Представляем Вашему вниманию адаптер быстрой зарядки который сможет зарядить ваш смартфон за считан. Быстрая зарядка для iPhone 20W с разъемом TYPE-C. Представляем Вашему вниманию адаптер быстрой зарядки который сможет зарядить ваш смартфон за считан. Быстрая зарядка для iPhone 20W с разъемом TYPE-C. Представляем Вашему вниманию адаптер быстрой зарядки который сможет зарядить ваш смартфон за считан. Быстрая зарядка для iPhone 20W с разъемом TYPE-C. Представляем Вашему вниманию адаптер быстрой зарядки который сможет зарядить ваш смартфон за считан. Быстрая зарядка для iPhone 20W с разъемом TYPE-C. Представляем Вашему вниманию адаптер быстрой зарядки который сможет зарядить ваш смартфон за считан. ',
					salesmanId: index + 1,
				}
			})
		)
	})
}

type TGetCashbackProduct = TProductItemProps | undefined
export const getCashbackProduct = async (
	id: number
): Promise<TGetCashbackProduct> => {
	const data = await getCashbackProducts()

	return new Promise((res, rej) => {
		res(
			data.find(el => {
				return el.id === id
			})
		)
	})
}

type TGetSimilarProducts = TProductItemProps[]
export const getSimilarProducts = (
	id: number
): Promise<TGetSimilarProducts> => {
	return new Promise((res, rej) => {
		res(
			[...Array(6)].map((_, index) => {
				return {
					id: index + 1,
					previewImage: '/images/stub/product-stub.png',
					images: [
						'/images/stub/product-stub.png',
						'/images/stub/product-stub-2.png',
					],
					isFavorite: true,
					name: 'Зарядка для iphone 20W type-c быстрое устройство',
					price: {
						price: (500 * (index + 1)) / (index + 2),
						discount: 20,
					},
					quantities: 221,
					tooltip: 'Подсказка',
					productDescription:
						'Быстрая зарядка для iPhone 20W с разъемом TYPE-C. Представляем Вашему вниманию адаптер быстрой зарядки который сможет зарядить ваш смартфон за считан. Быстрая зарядка для iPhone 20W с разъемом TYPE-C. Представляем Вашему вниманию адаптер быстрой зарядки который сможет зарядить ваш смартфон за считан. Быстрая зарядка для iPhone 20W с разъемом TYPE-C. Представляем Вашему вниманию адаптер быстрой зарядки который сможет зарядить ваш смартфон за считан. Быстрая зарядка для iPhone 20W с разъемом TYPE-C. Представляем Вашему вниманию адаптер быстрой зарядки который сможет зарядить ваш смартфон за считан. Быстрая зарядка для iPhone 20W с разъемом TYPE-C. Представляем Вашему вниманию адаптер быстрой зарядки который сможет зарядить ваш смартфон за считан. Быстрая зарядка для iPhone 20W с разъемом TYPE-C. Представляем Вашему вниманию адаптер быстрой зарядки который сможет зарядить ваш смартфон за считан. ',
					salesmanId: index + 1,
				}
			})
		)
	})
}
