'use client'
import { FC, MouseEventHandler } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import { Typography } from '@/components/ui'
import cls from './index.module.scss'

interface Props extends TClassName {
	onPrev?: MouseEventHandler
	onNext?: MouseEventHandler
	pages: {
		current: number
		max: number
	}
}
const Pagination: FC<Props> = ({
	className,
	onNext,
	onPrev,
	pages: { current, max },
}) => {
	const handlePrev: MouseEventHandler = e => {
		onPrev && onPrev(e)
	}
	const handleNext: MouseEventHandler = e => {
		onNext && onNext(e)
	}

	return (
		<div className={cn(cls.wrapper, [className])}>
			<div className={cn(cls.actions)}>
				<button className={cn(cls.btn)} onClick={handlePrev}>
					<Typography font='Inter-SB' size={14}>
						Назад
					</Typography>
				</button>
				<button className={cn(cls.btn)} onClick={handleNext}>
					<Typography font='Inter-SB' size={14}>
						Дальше
					</Typography>
				</button>
			</div>
			<Typography font='Inter-M' size={14} tag='h2'>
				Страница {current} из {max}
			</Typography>
		</div>
	)
}

export { Pagination }
