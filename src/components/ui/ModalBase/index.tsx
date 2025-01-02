'use client'
import { FC, useEffect } from 'react'
import { TChildren, TClassName } from '@/types'
import { cn } from '@/lib'
import { TModalSlug } from '@/hooks/zustand/useModalState'
import { useModalBase } from '@/hooks'
import cls from './index.module.scss'

interface Props extends TClassName, TChildren, TModalSlug {
	onClose?: () => void
}
// slug - Уникальный идентификатор для конкретной модалки (ID)
const ModalBase: FC<Props> = ({ children, className, slug, onClose }) => {
	const { modalState, visibleTransition, handleClose } = useModalBase({
		slug,
	})

	const handleWrapperClick = () => {
		handleClose()
	}

	useEffect(() => {
		if (!modalState) onClose && onClose()
	}, [modalState])

	return (
		<>
			{modalState && (
				<section
					onClick={handleWrapperClick}
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
