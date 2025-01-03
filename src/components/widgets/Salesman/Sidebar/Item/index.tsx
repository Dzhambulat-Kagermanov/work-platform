'use client'
import { FC, ReactNode } from 'react'
import { TClassName, TTag } from '@/types'
import { cn } from '@/lib'
import { Typography } from '@/components/ui'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import cls from './index.module.scss'
import { TSalesmanHomePageType } from '../../HomePagesSwitcher'

interface Props extends TClassName, TTag {
	text: string
	icon?: ReactNode
	link?: string
	additionalInfo?: ReactNode
	sidebarIsExpand?: boolean
	textOverlayCls?: string
	linkOnClick?: () => void
	activeSlug?: TSalesmanHomePageType
	slug?: string | null
}
const Item: FC<Props> = ({
	icon,
	sidebarIsExpand,
	link,
	text,
	className,
	additionalInfo,
	textOverlayCls,
	activeSlug,
	slug,
	linkOnClick,
	tag = 'div',
}) => {
	const Tag = tag
	const path = usePathname()

	return (
		<Tag
			onClick={linkOnClick}
			className={cn(cls.wrapper, [className], {
				[cls.active]: slug !== undefined ? activeSlug === slug : path === link,
				[cls.isExpand]: sidebarIsExpand === undefined || sidebarIsExpand,
			})}
		>
			{link ? (
				<Link
					className={cn(cls.item)}
					href={slug ? `${link}?homePageType=${slug}` : link}
				>
					{icon}
					<div className={cn(cls.text_overlay, [textOverlayCls])}>
						<div className={cn(cls.text_wrapper)}>
							<Typography font='Inter-SB' size={16} className={cn(cls.text)}>
								{text}
							</Typography>
							{additionalInfo}
						</div>
					</div>
				</Link>
			) : (
				<div className={cn(cls.item, [className])}>
					{icon}
					<div className={cn(cls.text_overlay, [textOverlayCls])}>
						<div className={cn(cls.text_wrapper)}>
							<Typography font='Inter-SB' size={16} className={cn(cls.text)}>
								{text}
							</Typography>
							{additionalInfo}
						</div>
					</div>
				</div>
			)}
		</Tag>
	)
}

export { Item }
