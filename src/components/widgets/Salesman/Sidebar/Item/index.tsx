'use client'
import { FC, ReactNode } from 'react'
import { TClassName, TTag } from '@/types'
import { cn } from '@/lib'
import { Typography } from '@/components/ui'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import cls from './index.module.scss'

export type TSalesmanHomePageType = 'products' | 'advertisements' | 'ransoms'

interface Props extends TClassName, TTag {
	text: string
	icon?: ReactNode
	link?: string
	additionalInfo?: ReactNode
	sidebarIsExpand: boolean
	textOverlayCls?: string
	slug?: string
}
const Item: FC<Props> = ({
	icon,
	slug,
	sidebarIsExpand,
	link,
	text,
	className,
	additionalInfo,
	textOverlayCls,
	tag = 'div',
}) => {
	const Tag = tag
	const path = usePathname()
	const queryParams = useSearchParams()
	const pageType: TSalesmanHomePageType = queryParams.get(
		'pageType'
	) as TSalesmanHomePageType

	return (
		<Tag
			className={cn(cls.wrapper, [className], {
				[cls.active]: slug ? pageType === slug : path === link,
				[cls.isExpand]: sidebarIsExpand,
			})}
		>
			{link || slug ? (
				<Link
					className={cn(cls.item)}
					href={link ? link : `/salesman?pageType=${slug}`}
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
