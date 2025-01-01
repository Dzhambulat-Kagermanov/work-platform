import { FC } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import { ProductItem } from '@/components/entities/ProductItem'
import Link from 'next/link'
import { PRODUCTS } from '../constants/products'
import cls from './index.module.scss'

interface Props extends TClassName {}
const Products: FC<Props> = ({ className }) => {
	return (
		<ul className={cn(cls.wrapper, [className])}>
			{PRODUCTS.map(
				({
					previewImage,
					name,
					price,
					quantities,
					isFavorite,
					tooltip,
					id,
				}) => {
					return (
						<Link href={`/buyer/products/${id}`} key={id}>
							<ProductItem
								key={id}
								headCls={cn(cls.product_head)}
								isFavorite={isFavorite}
								name={name}
								tooltip={tooltip}
								quantities={quantities}
								image={previewImage}
								price={price}
							/>
						</Link>
					)
				}
			)}
		</ul>
	)
}

export { Products }
