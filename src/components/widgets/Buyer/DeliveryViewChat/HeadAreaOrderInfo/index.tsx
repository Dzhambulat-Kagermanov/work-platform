import { FC } from 'react'
import { TClassName } from '@/types'
import { Typography } from '@/components/ui'
import { cn } from '@/lib'
import Link from 'next/link'
import Image from 'next/image'
import { useModalState, useScreen } from '@/hooks'
import { DELIVERY_CHAT_ORDER_INFO_MODAL, MD_LOW } from '@/constants'
import cls from './index.module.scss'

interface Props extends TClassName {}
const HeadAreaOrderInfo: FC<Props> = ({ className }) => {
	const showModal = useModalState(state => state.showModal)
	const handleModalOpen = () => {
		showModal({ slug: DELIVERY_CHAT_ORDER_INFO_MODAL })
	}

	const width = useScreen()
	return (
		<>
			{width > MD_LOW ? (
				<div className={cn(cls.wrapper, [className])}>
					<Typography font='Inter-R' size={12} tag='h6'>
						Заказ #739923
					</Typography>
					<div className={cn(cls.shop_info)}>
						<Link href={'/buyer/salesman/1'} className={cn(cls.link)}>
							<Typography font='Inter-R' size={12}>
								HEGO STYLE
							</Typography>
						</Link>
						<div className={cn(cls.rating)}>
							<Image
								src={'/images/shared/rating/star-v2.svg'}
								alt='Рейтинг'
								width={12}
								height={12}
							/>
							<Typography font='Inter-R' size={12}>
								4.7
							</Typography>
						</div>
					</div>
				</div>
			) : (
				<button className={cn(cls.modal_open_btn)} onClick={handleModalOpen}>
					<span></span>
					<span></span>
					<span></span>
				</button>
			)}
		</>
	)
}

export { HeadAreaOrderInfo }
