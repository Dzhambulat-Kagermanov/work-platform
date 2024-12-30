'use client'
import { ButtonHTMLAttributes, FC, MouseEvent } from 'react'
import cls from './index.module.scss'
import { cn } from '@/lib'
import { useModalState } from '@/hooks'
import { COMPLEX_SORT_MODAL } from '@/constants'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}
const SortMobile: FC<Props> = ({ className, onClick, ...other }) => {
	const showModal = useModalState(state => state.showModal)
	const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
		onClick && onClick(e)
		showModal({ slug: COMPLEX_SORT_MODAL })
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

export { SortMobile }
