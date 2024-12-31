'use client'
import { FC } from 'react'
import { TChildren, TClassName } from '@/types'
import { cn } from '@/lib'
import { TModalSlug } from '@/hooks/zustand/useModalState'
import cls from './index.module.scss'
import { useModalBase } from '@/hooks'

interface Props extends TClassName, TChildren, TModalSlug {}
// slug - Уникальный идентификатор для конкретной модалки (ID)
const ModalBase: FC<Props> = ({ children, className, slug }) => {
	const { modalState, visibleTransition, handleClose } = useModalBase({
		slug,
	})

	return (
		<>
			{modalState && (
				<section
					onClick={handleClose}
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
