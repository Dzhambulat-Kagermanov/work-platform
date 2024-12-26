'use client'
import { FC } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import { useScreen } from '@/hooks'
import { SM_MID } from '@/constants'
import { HomeSortMobile } from '@/components/features/HomeSortMobile'
import { HomeFilterCashback } from '@/components/features/HomeFilterCashback'
import { HomeFilterSort } from '@/components/features/HomeFilterPrice'
import { HomeFilterPrice } from '@/components/features/HomeFilterSort'
import cls from './index.module.scss'

interface Props extends TClassName {}
const Sort: FC<Props> = ({ className }) => {
	const width = useScreen()
	return (
		<>
			{width > SM_MID ? (
				<div className={cn(cls.wrapper, [className])}>
					<HomeFilterPrice className={cn(cls.btn)} />
					<HomeFilterCashback className={cn(cls.btn)} />
					<HomeFilterSort className={cn(cls.btn)} />
				</div>
			) : (
				<HomeSortMobile />
			)}
		</>
	)
}

export { Sort }
