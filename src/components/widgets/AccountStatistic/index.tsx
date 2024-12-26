import { FC } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import { AccountContentBlock, Typography } from '@/components/ui'
import cls from './index.module.scss'

interface Props extends TClassName {
	successfulBuybacks: number
	cashbackPaid: number
	productsGrate: number
	productsRating: number
}
const AccountStatistic: FC<Props> = ({
	className,
	cashbackPaid,
	productsGrate,
	productsRating,
	successfulBuybacks,
}) => {
	return (
		<AccountContentBlock
			tag='section'
			title='Статистика'
			className={cn(cls.wrapper, [className])}
			contentWrapperCls={cn(cls.content)}
			contentWrapperTag='ul'
		>
			<li className={cn(cls.item)}>
				<div className={cn(cls.item_content)}>
					<Typography
						font='Inter-B'
						size={20}
						tag='h3'
						className={cn(cls.green)}
					>
						{successfulBuybacks}%
					</Typography>
					<Typography font='Inter-R' tag='h2' size={16}>
						Успешных выкупов
					</Typography>
				</div>
			</li>
			<li className={cn(cls.item)}>
				<div className={cn(cls.item_content)}>
					<Typography font='Inter-B' size={20} tag='h3'>
						{cashbackPaid} ₽
					</Typography>
					<Typography font='Inter-R' tag='h2' size={16}>
						Кэшбека выплачено
					</Typography>
				</div>
			</li>
			<li className={cn(cls.item)}>
				<div className={cn(cls.item_content)}>
					<Typography font='Inter-B' size={20} tag='h3'>
						{productsGrate}
					</Typography>
					<Typography font='Inter-R' tag='h2' size={16}>
						Оценок товаров
					</Typography>
				</div>
			</li>
			<li className={cn(cls.item)}>
				<div className={cn(cls.item_content)}>
					<Typography
						font='Inter-B'
						size={20}
						tag='h3'
						className={cn(cls.green)}
					>
						{productsRating}
					</Typography>
					<Typography font='Inter-R' tag='h2' size={16}>
						Рейтинг товаров
					</Typography>
				</div>
			</li>
		</AccountContentBlock>
	)
}

export { AccountStatistic }
