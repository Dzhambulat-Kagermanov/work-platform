import { ButtonHTMLAttributes, CSSProperties, FC } from 'react'
import { cn } from '@/lib'
import { Typography } from '../Typography'
import cls from './index.module.scss'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	theme: 'fill' | 'outline'
	children: string
	size?: 'big' | 'mid' | 'low'
	wFull?: boolean
	primaryColor?: string
	secondColor?: string
}
const Button: FC<Props> = ({
	wFull,
	theme,
	className,
	primaryColor,
	secondColor,
	children,
	size = 'big',
	...other
}) => {
	return (
		<button
			className={cn(cls.button, [className, cls[theme], cls[size]], {
				[cls.wFull]: wFull,
			})}
			style={
				{
					'--primary-color':
						theme === 'fill'
							? primaryColor || 'var(--purple-300)'
							: primaryColor || 'var(--white-100)',
					'--second-color':
						theme === 'outline'
							? secondColor || 'var(--purple-300)'
							: secondColor || 'var(--white-100)',
				} as CSSProperties
			}
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
