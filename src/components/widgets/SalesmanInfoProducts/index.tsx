import { FC } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import { Container, Typography } from '@/components/ui'
import { salesmanProducts } from '@/constants/stub'
import { ProductItem } from '@/components/entities/ProductItem'
import cls from './index.module.scss'
import Link from 'next/link'

interface Props extends TClassName {}
const SalesmanInfoProducts: FC<Props> = ({ className }) => {
	return (
		<Container tag='section' className={cn(cls.wrapper, [className])}>
			<Typography font='Inter-B' size={25} tag='h2'>
				Товары продавца
			</Typography>
			<ul className={cn(cls.group)}>
				{salesmanProducts.map(
					({
						id,
						previewImage,
						name,
						price,
						productDescription,
						quantities,
						isFavorite,
						tooltip,
					}) => {
						return (
							<Link href={`/products/${id}`} key={id}>
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

export { SalesmanInfoProducts }
