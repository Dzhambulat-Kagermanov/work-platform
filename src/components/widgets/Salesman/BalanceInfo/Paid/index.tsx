import { FC } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import { Typography } from '@/components/ui'
import cls from './index.module.scss'

interface Props extends TClassName {}
const Paid: FC<Props> = ({ className }) => {
	return (
		<div className={cn(cls.wrapper, [className])}>
			<Typography font='Inter-M' size={14} tag='h3'>
				Потрачено:
			</Typography>
			<div className={cn(cls.content)}>
				<Typography font='Inter-R' size={12}>
					Сегодня:
				</Typography>
				<Typography font='Inter-R' size={12}>
					300 ₽
				</Typography>
				<Typography font='Inter-R' size={12}>
					Вчера:
				</Typography>
				<Typography font='Inter-R' size={12}>
					1300 ₽
				</Typography>
				<Typography font='Inter-R' size={12}>
					За 7 дней:
				</Typography>
				<Typography font='Inter-R' size={12}>
					2400 ₽
				</Typography>
			</div>
		</div>
	)
}

export { Paid }
