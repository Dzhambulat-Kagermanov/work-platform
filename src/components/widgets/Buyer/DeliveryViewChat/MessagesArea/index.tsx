'use client'
import { FC, Ref, useEffect, useRef } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import Image from 'next/image'
import { Typography } from '@/components/ui'
import { DeliveryViewNotification } from '../../DeliveryViewNotification'
import { MessagesAreaGroup } from '../MessagesAreaGroup'
import { MESSAGES, SALESMAN_IS_ONLINE } from '../constants/messages'
import { DeliveryReviewModal } from '../../DeliveryReviewModal'
import cls from './index.module.scss'

interface Props extends TClassName {}
const MessagesArea: FC<Props> = ({ className }) => {
	const notificationRef = useRef<HTMLDivElement>(null)
	const groupOverlayRef = useRef<HTMLDivElement>(null)
	useEffect(() => {
		if (groupOverlayRef.current && notificationRef.current) {
			groupOverlayRef.current.style.paddingTop = `${
				notificationRef.current.offsetHeight + 10
			}px`
		}
	}, [])

	return (
		<div className={cn(cls.wrapper, [className])}>
			{MESSAGES.length ? (
				<>
					<DeliveryViewNotification
						className={cn(cls.notification)}
						//@ts-ignore
						ref={notificationRef}
					/>
					<div className={cn(cls.messages_group_overlay)} ref={groupOverlayRef}>
						<div className={cn(cls.messages_group_wrapper)}>
							{MESSAGES.map(({ date, messages }) => {
								return (
									<MessagesAreaGroup
										className={cn(cls.messages_group)}
										salesmanIsOnline={SALESMAN_IS_ONLINE}
										date={date}
										messages={messages}
										key={date}
									/>
								)
							})}
						</div>
					</div>
					<DeliveryReviewModal className={cn(cls.review_modal)} />
				</>
			) : (
				<div className={cn(cls.empty)}>
					<Image
						src={'/images/delivery/chat.svg'}
						alt='Нет сообщений'
						width={56}
						height={56}
					/>
					<Typography font='Inter-M' size={18}>
						У вас пока нет активных заказов
					</Typography>
				</div>
			)}
		</div>
	)
}

export { MessagesArea }
