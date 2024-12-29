import { ButtonHTMLAttributes, FC } from 'react'
import { cn } from '@/lib'
import { Typography } from '../Typography'
import cls from './index.module.scss'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	theme: 'fill' | 'outline'
	children: string
	size?: 'big' | 'mid' | 'low'
	wFull?: boolean
}
const Button: FC<Props> = ({
	wFull,
	theme,
	className,
	children,
	size = 'big',
	...other
}) => {
	return (
		<button
			className={cn(cls.button, [className, cls[theme], cls[size]], {
				[cls.wFull]: wFull,
			})}
			{...other}
		>
			<Typography
				font='Inter-SB'
				size={size === 'big' || size === 'mid' ? 16 : 14}
			>
				{children}
			</Typography>
		</button>
	)
}

export { Button }
