import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { cn } from '@/shared/lib'
import { ProductItem } from '@/entities/ProductItem'
import cls from './index.module.scss'
import { getCashbackProducts } from '@/shared/api/products/get'
import Link from 'next/link'

interface Props extends TClassName {}
const Products: FC<Props> = async ({ className }) => {
	const items = await getCashbackProducts()

	return (
		<ul className={cn(cls.wrapper, [className])}>
			{items.map(({ image, name, price, quantities, isFavorite, tip, id }) => {
				return (
					<Link href={`/${id}`}>
						<ProductItem
							key={id}
							headCls={cn(cls.product_head)}
							isFavorite={isFavorite}
							name={name}
							tip={tip}
							quantities={quantities}
							image={image}
							price={price}
						/>
					</Link>
				)
			})}
		</ul>
	)
}

export { Products }
