'use client'
import { FC } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import { SALESMAN_BURGER_MENU } from '@/constants'
import { useModalBase } from '@/hooks'
import { Logo } from '../../shared/Logo'
import { Dropdown } from '@/components/ui'
import { ExpandArrowIcon } from '@/icons'
import cls from './index.module.scss'
import { LinksDropdown } from '../Sidebar/LinksDropdown'
import { Item } from '../Sidebar/Item'
import { LinksGroup } from '../Sidebar/LinksGroup'
import { UserInfo } from '../Sidebar/UserInfo'

interface Props extends TClassName {}
const BurgerMenu: FC<Props> = ({ className }) => {
	const { modalState, visibleTransition, handleClose } = useModalBase({
		slug: SALESMAN_BURGER_MENU,
	})
	return (
		<>
			{modalState && (
				<section
					className={cn(cls.wrapper, [className], {
						[cls.visible]: visibleTransition,
					})}
				>
					<div className={cn(cls.head)}>
						<Logo className={cn(cls.logo)} link='/salesman' />
						<button className={cn(cls.close_btn)} onClick={handleClose}>
							<ExpandArrowIcon color='var(--grey-300)' />
						</button>
					</div>
					<LinksGroup sidebarIsExpand={undefined} className={cn(cls.content)} />
				</section>
			)}
		</>
	)
}

export { BurgerMenu }
