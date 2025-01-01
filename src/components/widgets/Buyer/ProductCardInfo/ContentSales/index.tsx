'use client'
import { FC } from 'react'
import { TClassName, TSalesmanInfo } from '@/types'
import { cn } from '@/lib'
import { Typography } from '@/components/ui'
import cls from './index.module.scss'
import { useScreen } from '@/hooks'
import { SM_BIG } from '@/constants'

interface Props extends TClassName {
	salesman: Pick<TSalesmanInfo, 'boughtOut' | 'productsWithCashback'>
}
const ContentSales: FC<Props> = ({
	className,
	salesman: { boughtOut, productsWithCashback },
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
