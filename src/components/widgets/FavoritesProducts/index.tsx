import { FC } from 'react'
import { TClassName } from '@/types'
import { Container } from '@/components/ui'
import { cn } from '@/lib'
import cls from './index.module.scss'
import { favoriteProducts } from '@/constants/stub'
import { ProductItem } from '@/components/entities/ProductItem'
import Link from 'next/link'

interface Props extends TClassName {}
const FavoritesProducts: FC<Props> = ({ className }) => {
	return (
		<Container tag='section' className={cn(cls.wrapper, [className])}>
			<ul className={cn(cls.group)}>
				{favoriteProducts.map(
					({
						id,
						images,
						name,
						previewImage,
						price,
						productDescription,
						quantities,
						salesmanId,
						isFavorite,
						tooltip,
					}) => {
						return (
							<Link href={`/products/${id}`} key={id} className={cn(cls.link)}>
								<ProductItem
									wrapperCls={cn(cls.item)}
									image={previewImage}
									name={name}
									price={price}
									isFavorite={isFavorite}
									quantities={quantities}
									tag='li'
									tooltip={tooltip}
								/>
							</Link>
						)
					}
				)}
			</ul>
		</Container>
	)
}

export { FavoritesProducts }
