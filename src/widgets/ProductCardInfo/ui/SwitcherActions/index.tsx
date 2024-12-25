'use client'
import { FC, memo } from 'react'
import { TClassName } from '@/shared/types'
import { cn } from '@/shared/lib'
import { TContentType } from '../Switcher'
import { Typography } from '@/shared/ui'
import cls from './index.module.scss'

interface Props extends TClassName {
	setContentType: (value: TContentType) => void
	contentType: TContentType
}
const SwitcherActions: FC<Props> = memo(
	({ className, contentType, setContentType }) => {
		const handleConditions = () => {
			setContentType('conditions')
		}
		const handleDescription = () => {
			setContentType('description')
		}
		const handleReviews = () => {
			setContentType('reviews')
		}

		return (
			<div className={cn(cls.wrapper, [className])}>
				<button
					className={cn(cls.action, [], {
						[cls.active]: contentType === 'conditions',
					})}
					onClick={handleConditions}
				>
					<Typography font='Inter-SB' size={18}>
						Условия заказа
					</Typography>
				</button>
				<button
					className={cn(cls.action, [], {
						[cls.active]: contentType === 'description',
					})}
					onClick={handleDescription}
				>
					<Typography font='Inter-SB' size={18}>
						Описание товара
					</Typography>
				</button>
				<button
					className={cn(cls.action, [], {
						[cls.active]: contentType === 'reviews',
					})}
					onClick={handleReviews}
				>
					<Typography font='Inter-SB' size={18}>
						Отзывы
					</Typography>
				</button>
			</div>
		)
	}
)

export { SwitcherActions }
