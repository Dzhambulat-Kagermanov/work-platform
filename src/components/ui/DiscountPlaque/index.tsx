import { FC } from 'react'
import { TClassName } from '@/types'
import { Typography } from '../Typography'
import { cn } from '@/lib'
import cls from './index.module.scss'

type TColors = 'red' | 'blue' | 'green' | 'orange' | 'black' | 'purple'

interface Props extends TClassName {
	children: number | string
	customColor?: TColors
	customContent?: (number: number | string) => string
}
const DiscountPlaque: FC<Props> = ({
	className,
	children,
	customColor,
	customContent,
}) => {
	let color: TColors = 'black'
	if (customColor) {
		color = customColor
	} else if (typeof children === 'number') {
		if (children === 100) {
			color = 'green'
		} else if (children >= 90) {
			color = 'blue'
		} else if (children >= 80) {
			color = 'orange'
		} else if (children >= 70) {
			color = 'purple'
		} else if (children >= 60) {
			color = 'red'
		} else {
			color = 'black'
		}
	}

	return (
		<Typography
			font='Inter-M'
			size={12}
			className={cn(cls.discount, [className, cls[color]])}
		>
			{customContent ? customContent(children) : `-${children}%`}
		</Typography>
	)
}

export { DiscountPlaque }
