'use client'
import { FC, memo } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import { TContentType } from '../Switcher'
import { Typography } from '@/components/ui'
import cls from './index.module.scss'
import { useScreen } from '@/hooks'
import { SM_MID } from '@/constants'

interface Props extends TClassName {
	setContentType: (value: TContentType) => void
	contentType: TContentType
}
const SwitcherActions: FC<Props> = memo(
	({ className, contentType, setContentType }) => {
		const width = useScreen()

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
					<Typography font='Inter-SB' size={width > SM_MID ? 18 : 16}>
						Условия заказа
					</Typography>
				</button>
				<button
					className={cn(cls.action, [], {
						[cls.active]: contentType === 'description',
					})}
					onClick={handleDescription}
				>
					<Typography font='Inter-SB' size={width > SM_MID ? 18 : 16}>
						Описание товара
					</Typography>
				</button>
				<button
					className={cn(cls.action, [], {
						[cls.active]: contentType === 'reviews',
					})}
					onClick={handleReviews}
				>
					<Typography font='Inter-SB' size={width > SM_MID ? 18 : 16}>
						Отзывы
					</Typography>
				</button>
			</div>
		)
	}
)

export { SwitcherActions }
