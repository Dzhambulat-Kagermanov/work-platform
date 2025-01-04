'use client'
import { ButtonHTMLAttributes, FC, MouseEvent } from 'react'
import { cn } from '@/lib'
import { useModalState } from '@/hooks'
import { BUYER_BURGER_MENU } from '@/constants'
import cls from './index.module.scss'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}
const BurgerMenu: FC<Props> = ({ className, onClick, ...other }) => {
	const showModal = useModalState(state => state.showModal)
	const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
		onClick && onClick(e)
		showModal({ slug: BUYER_BURGER_MENU })
	}

	return (
		<button
			className={cn(cls.btn, [className])}
			onClick={handleClick}
			{...other}
		>
			<span></span>
			<span></span>
			<span></span>
		</button>
	)
}

export { BurgerMenu }
