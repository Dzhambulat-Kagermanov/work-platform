'use client'
import { FC } from 'react'
import { TClassName } from '@/types'
import { DiscountPlaque, ModalBase, Typography } from '@/components/ui'
import { cn } from '@/lib'
import { BUYER_DELIVERY_CHAT_ORDER_INFO_MODAL, MD_LOW } from '@/constants'
import { useScreen } from '@/hooks'
import cls from './index.module.scss'

interface Props extends TClassName {}
const DeliveryChatOrderInfoModal: FC<Props> = ({ className }) => {
	const width = useScreen()
	return (
		<>
			{width <= MD_LOW && (
				<ModalBase
					className={cn(cls.wrapper, [className])}
					slug={BUYER_DELIVERY_CHAT_ORDER_INFO_MODAL}
				>
					<div className={cn(cls.content)}>
						<Typography font='Inter-SB' size={14} tag='h2'>
							Заказ #739923
						</Typography>
						<ul className={cn(cls.group)}>
							<li className={cn(cls.item)}>
								<Typography font='Inter-R' size={12} tag='h3'>
									Размер скидки:
								</Typography>
								<DiscountPlaque className={cn(cls.plaque)}>{50}</DiscountPlaque>
							</li>
							<li className={cn(cls.item, [cls.priceWildberries])}>
								<Typography font='Inter-R' size={12} tag='h3'>
									Цена на Wildberries:
								</Typography>
								<Typography font='Inter-R' size={12}>
									300 ₽
								</Typography>
							</li>
							<li className={cn(cls.item, [cls.discountPrice])}>
								<Typography font='Inter-R' size={12} tag='h3'>
									Цена со скидкой:
								</Typography>
								<Typography font='Inter-SB' size={12}>
									150 ₽
								</Typography>
							</li>
						</ul>
					</div>
				</ModalBase>
			)}
		</>
	)
}

export { DeliveryChatOrderInfoModal }
