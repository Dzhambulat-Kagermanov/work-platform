import { FC } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import { DeliveryChats } from '../DeliveryChats'
import { DeliveryViewChat } from '../DeliveryViewChat'
import cls from './index.module.scss'

interface Props extends TClassName {}
const DeliveryContent: FC<Props> = ({ className }) => {
	return (
		<section className={cn(cls.wrapper, [className])}>
			<DeliveryChats className={cn(cls.chats)} />
			<DeliveryViewChat className={cn(cls.view)} />
		</section>
	)
}

export { DeliveryContent }
