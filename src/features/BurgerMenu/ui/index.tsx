import { ButtonHTMLAttributes, FC } from 'react'
import { cn } from '@/shared/lib'
import cls from './index.module.scss'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}
const BurgerMenu: FC<Props> = ({ className, ...other }) => {
	return (
		<button className={cn(cls.btn, [className])} {...other}>
			<span></span>
			<span></span>
			<span></span>
		</button>
	)
}

export { BurgerMenu }
