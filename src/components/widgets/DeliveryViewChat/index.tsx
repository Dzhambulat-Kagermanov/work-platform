import { FC } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import { ActionsArea } from './ActionsArea'
import { MessagesArea } from './MessagesArea'
import { HeadArea } from './HeadArea'
import cls from './index.module.scss'

interface Props extends TClassName {}
const DeliveryViewChat: FC<Props> = ({ className }) => {
	return (
		<section className={cn(cls.wrapper, [className])}>
			<HeadArea className={cn(cls.head)} />
			<MessagesArea className={cn(cls.messages)} />
			<ActionsArea className={cn(cls.actions)} />
		</section>
	)
}

export { DeliveryViewChat }
