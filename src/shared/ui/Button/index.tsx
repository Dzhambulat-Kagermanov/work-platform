import { ButtonHTMLAttributes, FC } from 'react'
import { cn } from '@/shared/lib'
import { Typography } from '../Typography'
import cls from './index.module.scss'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	theme: 'fill' | 'outline'
	children: string
}
const Button: FC<Props> = ({ theme, className, children, ...other }) => {
	return (
		<button className={cn(cls.button, [className, cls[theme]])} {...other}>
			<Typography font='Inter-SB' size={16}>
				{children}
			</Typography>
		</button>
	)
}

export { Button }
