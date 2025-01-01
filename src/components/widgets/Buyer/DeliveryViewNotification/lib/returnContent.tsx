import { Timer, Typography } from '@/components/ui'
import { TViewChatNotification } from '..'
import { ReactNode } from 'react'

export const returnContent = (
	type: TViewChatNotification
): {
	contentForDescription: ReactNode
	contentForPlaque: ReactNode
} => {
	let contentForPlaque: ReactNode
	let contentForDescription: ReactNode
	switch (type) {
		case 'waitingOrder':
			contentForPlaque = (
				<Typography font='Inter-M' size={12} tag='h5'>
					Ожидание заказа <Timer second={1800} format='MM:SS' />
				</Typography>
			)
			contentForDescription = (
				<Typography font='Inter-M' size={14}>
					У вас есть 30 минут, чтобы сделать заказ по инструкции продавца, иначе
					заказ будет отменен.
				</Typography>
			)
			break
		case 'canceled':
			contentForPlaque = (
				<Typography font='Inter-M' size={12} tag='h5'>
					Отменен /{' '}
					<Typography font='Inter-B' size={12} tag='strong'>
						<Timer second={43200} format='HH:MM:SS' />
					</Typography>
				</Typography>
			)
			contentForDescription = (
				<Typography font='Inter-M' size={14}>
					Вы не успели сделать заказ в установленный срок. Вы сможете повторить
					заказ через 12 часов.
				</Typography>
			)
			break
		case 'waitingReceive':
			contentForPlaque = (
				<Typography font='Inter-M' size={12} tag='h5'>
					Ожидание получения товара
				</Typography>
			)
			contentForDescription = (
				<Typography font='Inter-M' size={14}>
					Получите товар и выполните условия продавца в течение 10 дней или
					заказ будет отменен
				</Typography>
			)
			break
		case 'confirmation':
			contentForPlaque = (
				<Typography font='Inter-M' size={12} tag='h5'>
					На подтверждении продавцом
				</Typography>
			)
			contentForDescription = (
				<>
					<Typography font='Inter-M' size={14}>
						Ожидание подтверждения ваших материалов продавцом
					</Typography>
					<Typography font='Inter-SB' tag='time' size={20}>
						<Timer format='HH:MM:SS' second={259200} />
					</Typography>
				</>
			)
			break
		case 'cashbackReceived':
			contentForPlaque = (
				<Typography font='Inter-M' size={12} tag='h5'>
					Кэшбек получен
				</Typography>
			)
			contentForDescription = (
				<Typography font='Inter-M' size={14}>
					Кэшбек в размере 300Р был зачислен на ваш основной баланс
				</Typography>
			)
			break
		default:
	}
	return {
		contentForDescription,
		contentForPlaque,
	}
}
