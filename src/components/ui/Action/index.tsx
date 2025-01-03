'use client'
import { FC, MouseEventHandler, useState } from 'react'
import { TClassName } from '@/types'
import { Typography } from '@/components/ui'
import { ExpandArrowIcon } from '@/icons'
import { cn } from '@/lib'
import Link from 'next/link'
import cls from './index.module.scss'

interface Props extends TClassName {
	actions: {
		text: string
		link: string
	}[]
	actionBtnText: string
}
const Action: FC<Props> = ({ actionBtnText, actions, className }) => {
	const [isExpand, setIsExpand] = useState<boolean>(false)

	const handleBtnClick: MouseEventHandler = () => {
		setIsExpand(cur => !cur)
	}
	const handleLinkClick: MouseEventHandler = () => {
		setIsExpand(false)
	}

	return (
		<div
			className={cn(cls.wrapper, [className], {
				[cls.expand]: isExpand,
			})}
		>
			<button className={cn(cls.actions_btn)} onClick={handleBtnClick}>
				<Typography font='Inter-SB' size={14}>
					{actionBtnText}
				</Typography>
				<ExpandArrowIcon color='var(--grey-200)' className={cn(cls.icon)} />
			</button>
			<div className={cn(cls.actions_overlay)}>
				<div className={cn(cls.actions_wrapper)}>
					<nav className={cn(cls.actions)}>
						{actions.map(({ link, text }) => {
							return (
								<Typography
									other={{ onClick: handleLinkClick }}
									key={`${text}${link}`}
									font='Inter-SB'
									size={12}
									className={cn(cls.action)}
								>
									<Link href={link}>{text}</Link>
								</Typography>
							)
						})}
					</nav>
				</div>
			</div>
		</div>
	)
}

export { Action }
