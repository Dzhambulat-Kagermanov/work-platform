import { FC, forwardRef, Ref } from 'react'
import { cn } from '@/lib'
import { TClassName } from '@/types'
import { returnContent } from './lib/returnContent'
import cls from './index.module.scss'

export type TViewChatNotification =
	| 'waitingOrder'
	| 'waitingReceive'
	| 'confirmation'
	| 'cashbackReceived'
	| undefined

interface Props extends TClassName {}
const RansomsViewNotification: FC<Props> = forwardRef(
	({ className }, ref: Ref<HTMLDivElement> | undefined) => {
		let notificationType: TViewChatNotification = 'confirmation'
		const { contentForDescription, contentForPlaque } =
			returnContent(notificationType)
		return (
			<>
				{notificationType && (
					<div
						ref={ref}
						className={cn(cls.wrapper, [className, cls[notificationType]])}
					>
						<div className={cn(cls.plaque)}>{contentForPlaque}</div>
						<div className={cn(cls.description)}>{contentForDescription}</div>
					</div>
				)}
			</>
		)
	}
)

export { RansomsViewNotification }
