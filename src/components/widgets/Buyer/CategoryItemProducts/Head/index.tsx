'use client'
import { FC } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import { FilterCashback } from '@/components/features/FilterCashback'
import { FilterPrice } from '@/components/features/FilterPrice'
import { FilterSort } from '@/components/features/FilterSort'
import { useScreen } from '@/hooks'
import { SM_MID } from '@/constants'
import { SortMobile } from '@/components/features/SortMobile'
import { Typography } from '@/components/ui'
import cls from './index.module.scss'

interface Props extends TClassName {}
const Head: FC<Props> = ({ className }) => {
	const width = useScreen()

	return (
		<div className={cn(cls.wrapper, [className])}>
			{width > SM_MID ? (
				<>
					<FilterPrice className={cn(cls.btn)} />
					<FilterCashback className={cn(cls.btn)} />
					<FilterSort className={cn(cls.btn)} />
				</>
			) : (
				<div className={cn(cls.sort_complex)}>
					<SortMobile />
					<Typography font='Inter-M' size={16}>
						Фильтр
					</Typography>
				</div>
			)}
		</div>
	)
}

export { Head }
