import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { cn } from '@/shared/lib'
import { ProductCardCrumbs } from '@/widgets/ProductCardCrumbs'
import { ProductCardInfo } from '@/widgets/ProductCardInfo'
import cls from './index.module.scss'

interface Props extends TClassName {}
const ProductCardPage: FC<Props> = async ({ className }) => {
	const data = []

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
			<ProductCardInfo className={cn(cls.info)} />
		</main>
	)
}

export { ProductCardPage }
