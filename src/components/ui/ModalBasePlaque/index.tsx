'use client'
import { FC } from 'react'
import { TChildren, TClassName } from '@/types'
import { cn } from '@/lib'
import { TModalSlug } from '@/hooks/zustand/useModalState'
import cls from './index.module.scss'
import { useModalBase } from '@/hooks'

interface Props extends TClassName, TChildren, TModalSlug {}
const ModalBasePlaque: FC<Props> = ({ className, slug, children }) => {
	const { modalState, visibleTransition, handleClose } = useModalBase({
		slug,
	})

	return (
		<>
			{modalState && (
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
				</section>
			)}
		</>
	)
}

export { ModalBasePlaque }
