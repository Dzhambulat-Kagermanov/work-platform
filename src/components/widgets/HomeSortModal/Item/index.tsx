'use client'
import { FC, MouseEvent, MouseEventHandler } from 'react'
import { TClassName, TTag } from '@/types'
import { cn } from '@/lib'
import { Typography } from '@/components/ui'
import cls from './index.module.scss'

interface Props extends TClassName, TTag {
	activeSlug: string
	setActiveSlug: (value: string) => void
	slug: string
	onClick?: MouseEventHandler
}
const Item: FC<Props> = ({
	activeSlug,
	setActiveSlug,
	className,
	tag = 'div',
	slug,
	onClick,
}) => {
	const Tag = tag
	const handleClick = (e: MouseEvent) => {
		setActiveSlug(slug)
		onClick && onClick(e)
	}
	return (
		<Tag
			className={cn(cls.item, [className], {
				[cls.active]: activeSlug === slug,
			})}
			onClick={handleClick}
		>
			<Typography font='Inter-M' size={14} tag='h4'>
				{slug}
			</Typography>
			<div className={cn(cls.circle)} />
		</Tag>
	)
}

export { Item }
