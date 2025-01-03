'use client'
import { FC, MouseEventHandler, useState } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import { Logo } from '../../shared/Logo'
import { ExpandArrowIcon } from '@/icons'
import { LinksGroup } from './LinksGroup'
import { UserInfo } from './UserInfo'
import cls from './index.module.scss'
import { TSalesmanHomePageType } from '../HomePagesSwitcher'

interface Props extends TClassName {
	homePageType: TSalesmanHomePageType
}
const Sidebar: FC<Props> = ({ className, homePageType }) => {
	const [isExpand, setIsExpand] = useState<boolean>(false)

	const handleExpand: MouseEventHandler = () => {
		setIsExpand(cur => !cur)
	}

	return (
		<aside
			className={cn(cls.wrapper, [className], {
				[cls.isExpand]: isExpand,
			})}
		>
			<div className={cn(cls.content)}>
				<Logo className={cn(cls.logo)} link='/salesman' />
				<LinksGroup
					sidebarIsExpand={isExpand}
					className={cn(cls.group)}
					homePageType={homePageType}
				/>
				<UserInfo className={cn(cls.info)} sidebarIsExpand={isExpand} />
			</div>

			<button onClick={handleExpand} className={cn(cls.expand_btn)}>
				<ExpandArrowIcon color='var(--grey-300)' />
			</button>
		</aside>
	)
}

export { Sidebar }
