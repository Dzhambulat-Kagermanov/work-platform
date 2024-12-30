'use client'
import { FC, useEffect } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import { SHARED_BURGER_MENU_MODAL, SM_BIG, TRAN_MID } from '@/constants'
import { useModalBase } from '@/hooks/useModalBase'
import { Container } from '@/components/ui'
import { Logo } from '../Logo'
import { Group } from './Group'
import { useBodyClassName, useModalState, useScreen } from '@/hooks'
import { Footer } from './Footer'
import { ExpandArrowIcon } from '@/icons'
import { isAuth } from '@/constants/stub'
import cls from './index.module.scss'

interface Props extends TClassName {}
const BurgerMenu: FC<Props> = ({ className }) => {
	const screen = useScreen()

	const { modalState, visibleTransition, setVisibleTransition } = useModalBase({
		slug: SHARED_BURGER_MENU_MODAL,
	})

	const bodyClassNameAction = useBodyClassName()
	useEffect(() => {
		if (visibleTransition)
			bodyClassNameAction({ className: 'hide-scrollbar', type: 'add' })
		else bodyClassNameAction({ className: 'hide-scrollbar', type: 'remove' })
	}, [visibleTransition])

	const hideModal = useModalState(state => state.hideModal)
	const handleClose = () => {
		setVisibleTransition(false)
		const timeout = setTimeout(() => {
			hideModal({ slug: SHARED_BURGER_MENU_MODAL })
		}, TRAN_MID)
	}

	return (
		<>
			{screen <= SM_BIG && modalState && (
				<section
					className={cn(cls.wrapper, [className], {
						[cls.visible]: visibleTransition,
					})}
				>
					<Container className={cn(cls.content)}>
						<div className={cn(cls.head)}>
							<Logo hasNotLink className={cn(cls.logo)} />
							<button className={cn(cls.close_btn)} onClick={handleClose}>
								<ExpandArrowIcon color='var(--purple-800)' />
							</button>
						</div>
						<Group
							isAuth={isAuth}
							className={cn(cls.group)}
							actionForLinkClick={handleClose}
						/>
						<Footer isAuth={isAuth} className={cn(cls.footer)} />
					</Container>
				</section>
			)}
		</>
	)
}

export { BurgerMenu }
