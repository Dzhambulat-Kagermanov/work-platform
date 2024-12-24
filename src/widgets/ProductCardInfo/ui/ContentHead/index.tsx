import { FC, memo } from 'react'
import { TClassName, TProductItemProps, TSalesmanInfo } from '@/shared/types'
import { cn } from '@/shared/lib'
import { Typography } from '@/shared/ui'
import { Ratingbar } from '@/shared/ui'
import { TooltipButton } from '@/shared/ui'
import cls from './index.module.scss'

interface Props
	extends TClassName,
		Omit<
			TProductItemProps,
			| 'isFavorite'
			| 'previewImage'
			| 'images'
			| 'quantities'
			| 'id'
			| 'productDescription'
			| 'salesmanId'
		> {
	salesman: Pick<TSalesmanInfo, 'rating'>
}
const ContentHead: FC<Props> = memo(
	({
		name,
		price: { price, discount },
		salesman: { rating },
		className,
		tooltip,
	}) => {
		const prc = price.toFixed(2)
		const dsc =
			discount !== undefined
				? (price - (price / 100) * discount).toFixed(2)
				: undefined

		return (
			<div className={cn(cls.head, [className])}>
				<Typography font='Inter-B' size={25} tag='h2'>
					{name}
				</Typography>
				<Ratingbar className={cn(cls.rating)} rating={rating} />
				<div
					className={cn(cls.price, [], {
						[cls.hasDiscount]: dsc !== undefined,
					})}
				>
					<Typography font='Inter-B' size={28} tag='h5'>
						{dsc || price} ₽
					</Typography>
					{dsc && (
						<Typography font='Inter-M' size={20} tag='h6'>
							{prc} ₽
						</Typography>
					)}
					{tooltip && (
						<TooltipButton tooltip={tooltip} className={cn(cls.tooltip)} />
					)}
				</div>
			</div>
		)
	}
)

export { ContentHead }
