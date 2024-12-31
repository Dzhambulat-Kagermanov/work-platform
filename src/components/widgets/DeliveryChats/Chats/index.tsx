'use client'
import { FC, useState } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import { CHATS } from '../constants/chats'
import { ChatItem } from '@/components/entities/ChatItem'
import cls from './index.module.scss'

interface Props extends TClassName {}
const Chats: FC<Props> = ({ className }) => {
	const [activeId, setActiveId] = useState<number>(CHATS[0].id)

	return (
		<ul className={cn(cls.wrapper, [className])}>
			{CHATS.map(
				({
					avatar,
					id,
					isOnline,
					lastOnlineTime,
					productName,
					lastMessage,
					newMessagesQnt,
				}) => {
					return (
						<ChatItem
							tag='li'
							setIsActive={setActiveId}
							newMessagesQnt={newMessagesQnt}
							isActive={activeId === id}
							key={id}
							avatar={avatar}
							isOnline={isOnline}
							id={id}
							lastOnlineTime={lastOnlineTime}
							productName={productName}
							lastMessage={lastMessage}
							className={cn(cls.item)}
						/>
					)
				}
			)}
		</ul>
	)
}

export { Chats }
