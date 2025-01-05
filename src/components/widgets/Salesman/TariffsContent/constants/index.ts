import { TTariffsItemProps } from '@/types/salesman/tariffs'

export const TARIFFS: TTariffsItemProps[] = [
	{
		advantages: [
			'Выкуп живыми пользователями по ключевому запросу',
			'Фото/видео отзыв',
		],
		duration: 'Бессрочно',
		name: 'Start',
		price: 500,
		ransoms: {
			priceForOne: 95,
			qnt: 5,
		},
	},
	{
		advantages: [
			'Выкуп живыми пользователями по ключевому запросу',
			'Фото/видео отзыв',
		],
		duration: 'Бессрочно',
		name: 'Optimal',
		price: 1900,
		ransoms: {
			priceForOne: 95,
			qnt: 20,
		},
	},
	{
		advantages: [
			'Выкуп живыми пользователями по ключевому запросу',
			'Фото/видео отзыв',
		],
		duration: 'Бессрочно',
		name: 'Premium',
		price: 500,
		ransoms: {
			priceForOne: 90,
			qnt: 100,
		},
	},
	{
		advantages: [
			'Выкуп живыми пользователями по ключевому запросу',
			'Фото/видео отзыв',
		],
		duration: 'Бессрочно',
		name: 'Ultima',
		price: 40000,
		ransoms: {
			priceForOne: 80,
			qnt: 500,
		},
	},
]
