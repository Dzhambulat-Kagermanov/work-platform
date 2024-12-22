import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { cn } from '@/shared/lib'
import { Typography } from '@/shared/ui'
import { getCashbackProductsQnt } from '@/shared/api/products/get'
import cls from './index.module.scss'

interface Props extends TClassName {}
const Head: FC<Props> = async ({ className }) => {
	const productsQnt = await getCashbackProductsQnt()

	return (
		<div className={cn(cls.head, [className])}>
			<Typography tag='h2' font='Inter-SB' size={25}>
				Товары с кэшбеком:
			</Typography>
			<Typography tag='h3' font='Inter-R' size={14}>
				{`${productsQnt} товаров`}
			</Typography>
		</div>
	)
}

export { Head }
