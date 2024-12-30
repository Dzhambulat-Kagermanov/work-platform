'use client'
import { FC, useEffect } from 'react'
import { TChildren, TClassName } from '@/types'
import { cn } from '@/lib'
import { useBodyClassName, useModalState } from '@/hooks'
import { TRAN_MID } from '@/constants'
import { TModalSlug } from '@/hooks/zustand/useModalState'
import cls from './index.module.scss'
import { useModalBase } from '@/hooks/useModalBase'

interface Props extends TClassName, TChildren, TModalSlug {}
// slug - Уникальный идентификатор для конкретной модалки (ID)
const ModalBase: FC<Props> = ({ children, className, slug }) => {
	const { modalState, visibleTransition, setVisibleTransition } = useModalBase({
		slug,
	})

	const bodyClassNameAction = useBodyClassName()
	useEffect(() => {
		if (visibleTransition)
			bodyClassNameAction({ className: 'hide-scrollbar', type: 'add' })
		else bodyClassNameAction({ className: 'hide-scrollbar', type: 'remove' })
	}, [visibleTransition])

	const hideModal = useModalState(state => state.hideModal)
	const handleClick = () => {
		setVisibleTransition(false)
		const timeout = setTimeout(() => {
			hideModal({ slug })
		}, TRAN_MID)
	}

	return (
		<>
			{modalState && (
				<section
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
				</section>
			)}
		</>
	)
}

export { ModalBase }
