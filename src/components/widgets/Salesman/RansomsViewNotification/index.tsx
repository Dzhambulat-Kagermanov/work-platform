import { FC } from 'react'
import { cn } from '@/lib'
import { TClassName } from '@/types'
import { returnContent } from './lib/returnContent'
import cls from './index.module.scss'

export type TViewChatNotification =
	| 'waitingOrder'
	| 'canceled'
	| 'waitingReceive'
	| 'confirmation'
	| 'cashbackReceived'
	| undefined

interface Props extends TClassName {}
const RansomsViewNotification: FC<Props> = ({ className }) => {
	let notificationType: TViewChatNotification = 'waitingOrder'
	const { contentForDescription, contentForPlaque } =
		returnContent(notificationType)
	return (
		<>
			{notificationType && (
				<div className={cn(cls.wrapper, [className, cls[notificationType]])}>
					<div className={cn(cls.plaque)}>{contentForPlaque}</div>
					<div className={cn(cls.description)}>{contentForDescription}</div>
				</div>
			)}
		</>
	)
}

export { RansomsViewNotification }
