import { FC } from 'react'
import { TClassName, TProductItemProps } from '@/shared/types'
import { cn } from '@/shared/lib'
import { Typography } from '@/shared/ui'
import cls from './index.module.scss'

interface Props extends TClassName, Pick<TProductItemProps, 'salesman'> {}
const ContentSales: FC<Props> = ({
	salesman: { boughtOut, productsWithCashback },
	className,
}) => {
	return (
		<div className={cn(cls.wrapper, [className])}>
			<Typography font='Inter-R' size={16} tag='h5'>
				Выкупили: {boughtOut}
			</Typography>
			<Typography font='Inter-R' size={16} tag='h6'>
				Осталось товаров с кэшбеком у продавца: {productsWithCashback}
			</Typography>
		</div>
	)
}

export { ContentSales }
