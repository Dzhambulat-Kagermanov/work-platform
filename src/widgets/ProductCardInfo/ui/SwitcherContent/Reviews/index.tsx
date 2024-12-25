import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { cn } from '@/shared/lib'
import { Ratingbar, Typography } from '@/shared/ui'
import cls from './index.module.scss'

interface Props extends TClassName {
	itemCls?: string
}
const Reviews: FC<Props> = ({ className, itemCls }) => {
	return (
		<div className={cn(cls.wrapper, [className])}>
			<ul className={cn(cls.group)}>
				<li className={cn(cls.item, [itemCls])}>
					<Ratingbar rating={4} className={cn(cls.rating)} withoutNum />
					<Typography font='Inter-B' size={20} tag='h5'>
						Анна
					</Typography>
					<Typography font='Inter-R' size={14} tag='h4'>
						Все прошло отлично! Я сразу получила кешбэк после того как продацев
						подтвердил мои действия.
					</Typography>
					<Typography font='Inter-M' size={14} tag='time'>
						29 июля, 2023
					</Typography>
				</li>
				<li className={cn(cls.item, [itemCls])}>
					<Ratingbar rating={4} className={cn(cls.rating)} withoutNum />
					<Typography font='Inter-B' size={20} tag='h5'>
						Анна
					</Typography>
					<Typography font='Inter-R' size={14} tag='h4'>
						Все прошло отлично! Я сразу получила кешбэк после того как продацев
						подтвердил мои действия.
					</Typography>
					<Typography font='Inter-M' size={14} tag='time'>
						29 июля, 2023
					</Typography>
				</li>
				<li className={cn(cls.item, [itemCls])}>
					<Ratingbar rating={4} className={cn(cls.rating)} withoutNum />
					<Typography font='Inter-B' size={20} tag='h5'>
						Анна
					</Typography>
					<Typography font='Inter-R' size={14} tag='h4'>
						Все прошло отлично! Я сразу получила кешбэк после того как продацев
						подтвердил мои действия.
					</Typography>
					<Typography font='Inter-M' size={14} tag='time'>
						29 июля, 2023
					</Typography>
				</li>
				<li className={cn(cls.item, [itemCls])}>
					<Ratingbar rating={4} className={cn(cls.rating)} withoutNum />
					<Typography font='Inter-B' size={20} tag='h5'>
						Анна
					</Typography>
					<Typography font='Inter-R' size={14} tag='h4'>
						Все прошло отлично! Я сразу получила кешбэк после того как продацев
						подтвердил мои действия.
					</Typography>
					<Typography font='Inter-M' size={14} tag='time'>
						29 июля, 2023
					</Typography>
				</li>
			</ul>
		</div>
	)
}

export { Reviews }
