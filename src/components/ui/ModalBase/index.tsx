'use client'
import { FC, useEffect, useState } from 'react'
import { TChildren, TClassName } from '@/types'
import { cn } from '@/lib'
import { useModalState } from '@/hooks'
import { TRAN_MID } from '@/constants'
import { TModalSlug } from '@/hooks/zustand/useModalState'
import cls from './index.module.scss'

interface Props extends TClassName, TChildren, TModalSlug {}
// slug - Уникальный идентификатор для конкретной модалки (ID)
const ModalBase: FC<Props> = ({ children, className, slug }) => {
	const hideModal = useModalState(state => state.hideModal)
	const modalState = useModalState(
		state => state.modalsStates[slug]?.modalState
	)
	const [visibleTransition, setVisibleTransition] = useState<boolean>(
		!!modalState
	)

	useEffect(() => {
		if (visibleTransition !== modalState) {
			const timeout = setTimeout(() => {
				setVisibleTransition(!!modalState)
			}, 1)
		}
	}, [modalState])

	const handleClick = () => {
		setVisibleTransition(false)
		const timeout = setTimeout(() => {
			hideModal({ slug })
		}, TRAN_MID)
	}

	return (
		<>
			{modalState && (
				<div
					onClick={handleClick}
					className={cn(cls.wrapper, [className], {
						[cls.visible]: visibleTransition,
					})}
				>
					<div
						className={cls.content}
						onClick={e => {
							e.stopPropagation()
						}}
					>
						{children}
					</div>
				</div>
			)}
		</>
	)
}

export { ModalBase }
