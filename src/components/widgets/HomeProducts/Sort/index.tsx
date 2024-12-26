'use client'
import { FC } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import { Dropdown, Typography } from '@/components/ui'
import { useScreen } from '@/hooks'
import { SM_MID } from '@/constants'
import { HomeSortMobile } from '@/components/features/HomeSortMobile'
import cls from './index.module.scss'

interface Props extends TClassName {}
const Sort: FC<Props> = ({ className }) => {
	const width = useScreen()
	return (
		<>
			{width > SM_MID ? (
				<div className={cn(cls.wrapper, [className])}>
					<Dropdown
						wrapperCls={cn(cls.dropdown)}
						items={[
							{
								content: (
									<Typography font='Inter-M' size={14}>
										1000
									</Typography>
								),
								value: 1000,
							},
							{
								content: (
									<Typography font='Inter-M' size={14}>
										2000
									</Typography>
								),
								value: 2000,
							},
							{
								content: (
									<Typography font='Inter-M' size={14}>
										3000
									</Typography>
								),
								value: 3000,
							},
						]}
						placeholder='Цена, ₽'
					/>
					<Dropdown
						wrapperCls={cn(cls.dropdown)}
						items={[
							{
								content: (
									<Typography font='Inter-M' size={14}>
										1000
									</Typography>
								),
								value: 1000,
							},
							{
								content: (
									<Typography font='Inter-M' size={14}>
										2000
									</Typography>
								),
								value: 2000,
							},
							{
								content: (
									<Typography font='Inter-M' size={14}>
										3000
									</Typography>
								),
								value: 3000,
							},
						]}
						placeholder='Кэшбек, %'
					/>
					<Dropdown
						wrapperCls={cn(cls.dropdown)}
						items={[
							{
								content: (
									<Typography font='Inter-M' size={14}>
										1000
									</Typography>
								),
								value: 1000,
							},
							{
								content: (
									<Typography font='Inter-M' size={14}>
										2000
									</Typography>
								),
								value: 2000,
							},
							{
								content: (
									<Typography font='Inter-M' size={14}>
										3000
									</Typography>
								),
								value: 3000,
							},
						]}
						placeholder='Сортировка'
					/>
				</div>
			) : (
				<HomeSortMobile />
			)}
		</>
	)
}

export { Sort }
