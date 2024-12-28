'use client'
import { FC } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import { SHARED_BURGER_MENU_MODAL, SM_BIG, TRAN_MID } from '@/constants'
import { useModalBase } from '@/hooks/useModalBase'
import { Container } from '@/components/ui'
import { Logo } from '../Logo'
import { Group } from './Group'
import { useModalState, useScreen } from '@/hooks'
import { Footer } from './Footer'
import cls from './index.module.scss'
import { ExpandArrowIcon } from '@/icons'

interface Props extends TClassName {}
const BurgerMenu: FC<Props> = ({ className }) => {
	const screen = useScreen()
	const isAuth = true
	const { modalState, visibleTransition, setVisibleTransition } = useModalBase({
		slug: SHARED_BURGER_MENU_MODAL,
	})

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
						<Group isAuth={isAuth} className={cn(cls.group)} />
						<Footer isAuth={isAuth} className={cn(cls.footer)} />
					</Container>
				</section>
			)}
		</>
	)
}

export { BurgerMenu }
