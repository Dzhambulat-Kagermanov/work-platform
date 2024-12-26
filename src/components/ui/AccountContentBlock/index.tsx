import { FC, ReactNode, JSX } from 'react'
import { TClassName, TTag } from '@/types'
import { cn } from '@/lib'
import { Typography } from '../Typography'
import cls from './index.module.scss'

interface Props extends TClassName, TTag {
	title: string
	children: ReactNode
	contentWrapperCls?: string
	titleCls?: string
	endChildren?: ReactNode
	contentWrapperTag?: keyof JSX.IntrinsicElements
}
const AccountContentBlock: FC<Props> = ({
	className,
	children,
	title,
	tag = 'div',
	contentWrapperTag = 'div',
	contentWrapperCls,
	titleCls,
	endChildren,
}) => {
	const Tag = tag
	const Content = contentWrapperTag
	return (
		<Tag className={cn(cls.wrapper, [className])}>
			<Typography
				className={cn(cls.title, [titleCls])}
				font='Inter-SB'
				size={14}
				tag='h2'
			>
				{title}
			</Typography>
			<Content className={cn(cls.content_wrapper, [contentWrapperCls])}>
				{children}
			</Content>
			{endChildren}
		</Tag>
	)
}

export { AccountContentBlock }
