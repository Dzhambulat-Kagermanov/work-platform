'use client'
import { FC } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import { SHARED_BURGER_MENU_MODAL, SM_BIG } from '@/constants'
import { useModalBase } from '@/hooks'
import { Container } from '@/components/ui'
import { Logo } from '../../shared/Logo'
import { Group } from './Group'
import { useScreen } from '@/hooks'
import { Footer } from './Footer'
import { ExpandArrowIcon } from '@/icons'
import { isAuth } from '@/constants/stub'
import cls from './index.module.scss'

interface Props extends TClassName {}
const BurgerMenu: FC<Props> = ({ className }) => {
	const screen = useScreen()

	const { modalState, visibleTransition, handleClose } = useModalBase({
		slug: SHARED_BURGER_MENU_MODAL,
	})

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
						<Footer
							isAuth={isAuth}
							className={cn(cls.footer)}
							actionForLinkClick={handleClose}
						/>
					</Container>
				</section>
			)}
		</>
	)
}

export { BurgerMenu }
