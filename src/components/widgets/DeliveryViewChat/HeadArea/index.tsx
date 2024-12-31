import { FC } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import Image from 'next/image'
import { DiscountPlaque, Typography } from '@/components/ui'
import cls from './index.module.scss'
import Link from 'next/link'

interface Props extends TClassName {}
const HeadArea: FC<Props> = ({ className }) => {
	return (
		<div className={cn(cls.wrapper, [className])}>
			<Image
				src={'/images/stub/avatar.png'}
				width={70}
				height={70}
				alt='Аватар'
			/>
			<div className={cn(cls.info)}>
				<Typography font='Inter-SB' size={16} tag='h2'>
					Зарядка для iphone 20W type-c быстрое устройство
				</Typography>
				<Typography font='Inter-R' size={14} tag='time'>
					Офлайн: 28 минут
				</Typography>
				<div className={cn(cls.product_info)}>
					<DiscountPlaque className={cn(cls.plaque)}>{90}</DiscountPlaque>
					<Typography font='Inter-SB' size={12} tag='h5'>
						150 ₽
					</Typography>
					<Typography font='Inter-R' size={12} tag='h6'>
						300 ₽
					</Typography>
				</div>
			</div>
			<div className={cn(cls.order_info)}>
				<Typography font='Inter-R' size={12} tag='h6'>
					Заказ #739923
				</Typography>
				<div className={cn(cls.shop_info)}>
					<Link href={'/salesman/1'} className={cn(cls.link)}>
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
		</div>
	)
}

export { HeadArea }
