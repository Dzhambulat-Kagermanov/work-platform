import { FC } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import { ProductCardCrumbs } from '@/components/widgets/ProductCardCrumbs'
import { ProductCardInfo } from '@/components/widgets/ProductCardInfo'
import { getCashbackProduct } from '@/api/products/get'
import { notFound } from 'next/navigation'
import cls from './index.module.scss'

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
			<ProductCardInfo data={data} wrapperClassName={cn(cls.info)} />
		</main>
	)
}

export { ProductCardPage }
