import { TSalesmanInfo } from '@/shared/types'

type TGetSalesmanInfo = TSalesmanInfo
export const getSalesmanInfo = async (
	id: number
): Promise<TGetSalesmanInfo> => {
	return new Promise((res, rej) => {
		res({
			id: 1,
			boughtOut: 12,
			productsWithCashback: 0,
			rating: 3.7,
			shopName: 'Магазин',
		})
	})
}
