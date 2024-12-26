'use client'
import { ButtonHTMLAttributes, FC } from 'react'
import { cn } from '@/lib'
import { Typography } from '@/components/ui'
import { ExpandArrowIcon } from '@/icons'
import cls from './index.module.scss'
import { HOME_PRICE_MODAL } from '@/constants'
import { useModalState } from '@/hooks'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}
const HomeFilterSort: FC<Props> = ({ className, children, ...other }) => {
	const showModal = useModalState(state => state.showModal)
	const modalState = useModalState(
		state => state.modalsStates[HOME_PRICE_MODAL]?.modalState
	)
	const handleClick = () => {
		showModal({ slug: HOME_PRICE_MODAL })
	}
	return (
		<button
			className={cn(cls.btn, [className], {
				[cls.expand]: !!modalState,
			})}
			{...other}
			onClick={handleClick}
		>
			<Typography font='Inter-SB' size={14} className={cn(cls.text)}>
				Сортировка
			</Typography>
			<ExpandArrowIcon color='var(--grey-300)' className={cn(cls.icon)} />
		</button>
	)
}

export { HomeFilterSort }
