import { FC, memo } from 'react'
import { TTag } from '@/shared/types'
import { cn } from '@/shared/lib'
import Image from 'next/image'
import { FavoriteIcon, HelpIcon } from '@/shared/icons'
import { Typography } from '@/shared/ui'
import cls from './index.module.scss'

interface Props extends TTag {
	price: {
		price: number
		discount?: number
	}
	tip?: string
	quantities?: number
	name: string
	image: string
	isFavorite?: boolean

	wrapperCls?: string
	headCls?: string
	contentCls?: string
}
const ProductItem: FC<Props> = memo(
	({
		image,
		price,
		name,
		isFavorite,
		quantities,
		tip,
		tag = 'div',
		contentCls,
		headCls,
		wrapperCls,
	}) => {
		const Tag = tag
		const disc = price.discount
		const prc = price.price

		return (
			<Tag
				className={cn(cls.item, [wrapperCls], {
					[cls.isFavorite]: !!isFavorite,
					[cls.hasTip]: !!tip,
					[cls.hasDiscount]: !!disc,
				})}
			>
				<div className={cn(cls.head, [headCls])}>
					<Image src={image} alt='Товар' width={200} height={235} />
					<div className={cn(cls.overlay)}>
						{isFavorite !== undefined ? (
							<FavoriteIcon
								{...(isFavorite
									? { stroke: 'var(--purple-600)', color: 'var(--purple-700)' }
									: { stroke: 'var(--white-100)' })}
							/>
						) : (
							<p />
						)}
						{!!disc && (
							<div className={cn(cls.discount)}>
								<Typography font='Inter-M' size={12} tag='h4'>
									-{disc}%
								</Typography>
							</div>
						)}
					</div>
				</div>
				<div className={cn(cls.content, [contentCls])}>
					<div className={cn(cls.price)}>
						<Typography font='Inter-SB' size={18} tag='h5'>
							{!!disc ? Math.floor(prc - (prc / 100) * disc) : prc} ₽
						</Typography>
						{tip && (
							<div title={tip} className={cn(cls.tip)}>
								<HelpIcon color='var(--grey-300)' />
							</div>
						)}
						{!!disc && (
							<Typography font='Inter-R' size={14} tag='h6'>
								{prc} ₽
							</Typography>
						)}
					</div>
					<Typography font='Inter-R' size={14} tag='h3'>
						{name}
					</Typography>
					{quantities && (
						<Typography
							font='Inter-R'
							size={14}
							tag='h4'
						>{`Осталось: ${quantities} шт`}</Typography>
					)}
				</div>
			</Tag>
		)
	}
)

export { ProductItem }
