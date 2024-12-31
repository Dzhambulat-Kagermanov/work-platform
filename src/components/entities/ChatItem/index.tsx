'use client'
import { FC } from 'react'
import { TChatPlaqueProps, TClassName, TState, TTag } from '@/types'
import { cn } from '@/lib'
import { Typography } from '@/components/ui'
import { ChatAvatarItem } from '../ChatAvatarItem'
import cls from './index.module.scss'

interface Props extends TClassName, TTag, TChatPlaqueProps {
	isActive: boolean
	setIsActive: TState<number>
}
const ChatItem: FC<Props> = ({
	id,
	avatar,
	productName,
	newMessagesQnt,
	isOnline,
	lastMessage,
	lastOnlineTime,
	className,
	isActive,
	setIsActive,
	tag = 'div',
}) => {
	const handleClick = () => {
		setIsActive(id)
	}
	const Tag = tag
	return (
		<Tag
			className={cn(cls.item, [className], {
				[cls.active]: isActive,
			})}
			onClick={handleClick}
		>
			<ChatAvatarItem
				className={cn(cls.avatar)}
				avatar={avatar}
				isOnline={isOnline}
			/>
			<div className={cn(cls.content)}>
				<div className={cn(cls.head)}>
					<Typography font='Inter-SB' size={14} tag='h2'>
						{productName}
					</Typography>
					<Typography font='Inter-M' size={14} tag='time'>
						{lastOnlineTime}
					</Typography>
				</div>
				<div className={cn(cls.footer)}>
					<Typography font='Inter-R' size={14} tag='h3'>
						{lastMessage || 'Enter your message description here ...'}
					</Typography>
					{newMessagesQnt ? (
						<Typography font='Inter-SB' size={12}>
							{newMessagesQnt}
						</Typography>
					) : null}
				</div>
			</div>
		</Tag>
	)
}

export { ChatItem }
