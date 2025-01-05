'use client'
import { FC } from 'react'
import { TChildren, TClassName } from '@/types'
import { cn } from '@/lib'
import { TModalSlug } from '@/hooks/zustand/useModalState'
import { useModalBase } from '@/hooks'
import { createPortal } from 'react-dom'
import dynamic from 'next/dynamic'
import cls from './index.module.scss'

interface Props extends TClassName, TChildren, TModalSlug {
	onClose?: () => void
}
// slug - Уникальный идентификатор для конкретной модалки (ID)
const ModalBaseFC: FC<Props> = ({ children, className, slug, onClose }) => {
	const { modalState, visibleTransition, handleClose } = useModalBase({
		slug,
	})
	const modalsContainer = document.getElementById('modals') as Element

	const handleWrapperClick = () => {
		onClose && onClose()
		handleClose()
	}

	return (
		<>
			{modalState &&
				createPortal(
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
					</section>,
					modalsContainer
				)}
		</>
	)
}

export const ModalBase = dynamic(() => Promise.resolve(ModalBaseFC), {
	ssr: false,
})
