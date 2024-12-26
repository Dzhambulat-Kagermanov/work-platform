import { FC } from 'react'
import cls from './index.module.scss'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import { Typography } from '@/components/ui'

interface Props extends TClassName {}
const Conditions: FC<Props> = ({ className }) => {
	return (
		<ul className={cn(cls.wrapper, [className])}>
			<li className={cn(cls.item)}>
				<Typography font='Inter-R' size={14} tag='h4'>
					Кэшбек начисляется полностью за оставление отзыва с фотографиями
					товара
				</Typography>
			</li>
			<li className={cn(cls.item)}>
				<Typography font='Inter-R' size={14} tag='h4'>
					Начисление кэшбека в течение 72 часов после отзыва
				</Typography>
			</li>
			<li className={cn(cls.item)}>
				<Typography font='Inter-R' size={14} tag='h4'>
					50% кэшбека если отзыв не прошел модерацию Вайлдберис
				</Typography>
			</li>
		</ul>
	)
}

export { Conditions }
