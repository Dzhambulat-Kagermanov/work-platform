import { FC } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import { ProductItem } from '@/components/entities/ProductItem'
import { getCashbackProducts } from '@/api/products/get'
import Link from 'next/link'
import cls from './index.module.scss'

interface Props extends TClassName {}
const Products: FC<Props> = async ({ className }) => {
	const items = await getCashbackProducts()

	return (
		<ul className={cn(cls.wrapper, [className])}>
			{items.map(
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
						<Link href={`/products/${id}`} key={id}>
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
