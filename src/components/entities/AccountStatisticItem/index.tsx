import { FC } from 'react'
import { TClassName, TTag } from '@/types'
import { cn } from '@/lib'
import { Typography } from '@/components/ui'
import cls from './index.module.scss'

interface Props extends TClassName, TTag {
	title: string | number
	subtitle: string
	contentCls?: string
	titleCls?: string
	isTitleGreen?: boolean
}
const AccountStatisticItem: FC<Props> = ({
	className,
	contentCls,
	titleCls,
	tag = 'div',
	subtitle,
	title,
	isTitleGreen,
}) => {
	const Tag = tag

	return (
		<Tag className={cn(cls.item, [className])}>
			<div className={cn(cls.item_content, [contentCls])}>
				<Typography
					font='Inter-B'
					size={20}
					tag='h3'
					className={cn('', [titleCls], { [cls.green]: isTitleGreen })}
				>
					{title}
				</Typography>
				<Typography font='Inter-R' tag='h2' size={16}>
					{subtitle}
				</Typography>
			</div>
		</Tag>
	)
}

export { AccountStatisticItem }
