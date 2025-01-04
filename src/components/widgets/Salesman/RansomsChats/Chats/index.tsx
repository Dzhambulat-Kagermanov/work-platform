'use client'
import { FC } from 'react'
import { TClassName, TState } from '@/types'
import { cn } from '@/lib'
import { CHATS } from '../constants/chats'
import { ChatItem } from '@/components/entities/ChatItem'
import cls from './index.module.scss'

interface Props extends TClassName {
	activeIdSTUB?: number
	setActiveIdSTUB: TState<number | undefined>
}
const Chats: FC<Props> = ({ className, activeIdSTUB, setActiveIdSTUB }) => {
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
							setIsActive={setActiveIdSTUB}
							newMessagesQnt={newMessagesQnt}
							isActive={activeIdSTUB === id}
							key={id}
							avatar={avatar}
							isOnline={isOnline}
							id={id}
							lastOnlineTime={lastOnlineTime}
							productName={productName}
							lastMessage={lastMessage}
							className={cn(cls.item)}
							footerCls={cn(cls.item_footer)}
							headCls={cn(cls.item_head)}
							contentCls={cn(cls.item_content)}
						/>
					)
				}
			)}
		</ul>
	)
}

export { Chats }
