import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { cn } from '@/shared/lib'
import { ProductCardCrumbs } from '@/widgets/ProductCardCrumbs'
import { ProductCardInfo } from '@/widgets/ProductCardInfo'
import cls from './index.module.scss'
import { getCashbackProduct } from '@/shared/api/products/get'
import { notFound } from 'next/navigation'

interface Props extends TClassName {
	id: number
}
const ProductCardPage: FC<Props> = async ({ className, id }) => {
	const data = await getCashbackProduct(id)

	if (!data) return notFound()

	return (
		<main className={cn(cls.main, [className])}>
			<ProductCardCrumbs
				items={[
					{
						link: '#',
						text: 'Главная',
					},
					{
						link: '#',
						text: 'Кабели и зарядные устройства',
					},
					{
						link: '#',
						text: 'Продавец №14023',
					},
				]}
				className={cn(cls.crumbs, ['modules-gap-top'])}
			/>
			<ProductCardInfo data={data} className={cn(cls.info)} />
		</main>
	)
}

export { ProductCardPage }
