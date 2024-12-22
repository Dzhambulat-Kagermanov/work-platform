import { ButtonHTMLAttributes, FC } from 'react'
import cls from './index.module.scss'
import { cn } from '@/shared/lib'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}
const HomeSort: FC<Props> = ({ className, ...other }) => {
	return (
		<button className={cn(cls.btn, [className])} {...other}>
			<span></span>
			<span></span>
			<span></span>
		</button>
	)
}

export { HomeSort }
