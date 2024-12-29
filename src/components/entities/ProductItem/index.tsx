'use client'
import { FC, memo } from 'react'
import { TTag } from '@/types'
import { cn } from '@/lib'
import Image from 'next/image'
import { FavoriteIcon, HelpIcon } from '@/icons'
import { Typography } from '@/components/ui'
import cls from './index.module.scss'

interface Props extends TTag {
	price: {
		price: number
		discount?: number
	}
	tooltip?: string
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
		tooltip,
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
					[cls.hasTooltip]: !!tooltip,
					[cls.hasDiscount]: !!disc,
				})}
			>
				<div className={cn(cls.head, [headCls])}>
					<Image src={image} alt='Товар' width={200} height={235} />
					<div className={cn(cls.overlay)}>
						{isFavorite !== undefined ? (
							<div
								onClick={e => {
									e.preventDefault()
								}}
							>
								<FavoriteIcon
									{...(isFavorite
										? {
												stroke: 'var(--purple-600)',
												color: 'var(--purple-700)',
										  }
										: { stroke: 'var(--white-100)' })}
								/>
							</div>
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
							{!!disc ? Math.round(prc - (prc / 100) * disc) : prc} ₽
						</Typography>
						{tooltip && (
							<div
								title={tooltip}
								className={cn(cls.tooltip)}
								onClick={e => {
									e.preventDefault()
								}}
							>
								<HelpIcon color='var(--grey-300)' />
							</div>
						)}
						{!!disc && (
							<Typography font='Inter-R' size={14} tag='h6'>
								{Math.round(prc)} ₽
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
