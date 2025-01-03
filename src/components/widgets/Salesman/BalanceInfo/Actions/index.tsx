'use client'
import { FC } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import { Typography } from '@/components/ui'
import { PlusIcon } from '@/icons'
import Link from 'next/link'
import { useScreen } from '@/hooks'
import { Paid } from '../Paid'
import cls from './index.module.scss'

interface Props extends TClassName {}
const Actions: FC<Props> = ({ className }) => {
	const width = useScreen()
	return (
		<div className={cn(cls.wrapper, [className])}>
			<Link
				href={'/salesman/balance/tariffs'}
				className={cn(cls.item, [cls.ransoms])}
			>
				<Typography font='Inter-R' size={12} tag='h3'>
					Выкупы
				</Typography>
				<div className={cn(cls.info)}>
					<Typography font='Inter-R' size={12}>
						10 шт
					</Typography>
					<button className={cn(cls.plus_btn)}>
						<PlusIcon color='var(--grey-100)' />
					</button>
				</div>
			</Link>
			<input
				className={cn(cls.item, [cls.promocode])}
				placeholder='Ввести промокод'
			/>
			{width <= 700 && width > 550 && <Paid className={cn(cls.paid)} />}
		</div>
	)
}

export { Actions }
