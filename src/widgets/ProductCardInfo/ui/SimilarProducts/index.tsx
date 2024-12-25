'use client'
import { FC } from 'react'
import { TClassName, TProductItemProps } from '@/shared/types'
import { cn } from '@/shared/lib'
import { Typography } from '@/shared/ui'
import { useQuery } from '@tanstack/react-query'
import { getSimilarProducts } from '@/shared/api/products/get'
import { ProductItem } from '@/entities/ProductItem'
import cls from './index.module.scss'
import Link from 'next/link'

export const queryKey = ['productsCard', 'similar']

interface Props extends TClassName, Pick<TProductItemProps, 'id'> {}
const SimilarProducts: FC<Props> = ({ id, className }) => {
	const { data, isFetching, isPending, error } = useQuery({
		queryKey,
		queryFn: () => getSimilarProducts(id),
	})

	return (
		<div className={cn(cls.wrapper, [className])}>
			<Typography font='Inter-B' size={25} className={cn(cls.title)} tag='h2'>
				Смотрите также
			</Typography>
			<ul className={cn(cls.group)}>
				{data &&
					data.map(({ id, name, previewImage, price, isFavorite, tooltip }) => {
						return (
							<Link href={`/products/${id}`} key={id}>
								<ProductItem
									tag='li'
									wrapperCls={cn(cls.item)}
									image={previewImage}
									name={name}
									price={price}
									isFavorite={isFavorite}
									tooltip={tooltip}
								/>
							</Link>
						)
					})}
			</ul>
		</div>
	)
}

export { SimilarProducts }
