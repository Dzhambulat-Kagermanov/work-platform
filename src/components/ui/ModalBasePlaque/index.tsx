'use client'
import { FC } from 'react'
import { TChildren, TClassName } from '@/types'
import { cn } from '@/lib'
import { TModalSlug } from '@/hooks/zustand/useModalState'
import { useModalBase } from '@/hooks'
import { createPortal } from 'react-dom'
import cls from './index.module.scss'

interface Props extends TClassName, TChildren, TModalSlug {}
const ModalBasePlaque: FC<Props> = ({ className, slug, children }) => {
	const { modalState, visibleTransition, handleClose } = useModalBase({
		slug,
	})
	const modalsContainer = document.getElementById('modals') as Element

	return (
		<>
			{modalState &&
				createPortal(
					<section
						className={cn(cls.wrapper, [className], {
							[cls.visible]: visibleTransition,
						})}
						onClick={handleClose}
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

export { ModalBasePlaque }
