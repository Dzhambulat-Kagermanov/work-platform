import { FC } from 'react'
import { TClassName, TProductItemProps } from '@/shared/types'
import { cn } from '@/shared/lib'
import { Container } from '@/shared/ui'
import cls from './index.module.scss'
import { Gallery } from '../Gallery'

interface Props extends TClassName {
	data: TProductItemProps
}
const ProductCardInfo: FC<Props> = ({
	className,
	data: {
		id,
		images,
		name,
		previewImage,
		price,
		productDescription,
		quantities,
		salesman,
		isFavorite,
		tip,
	},
}) => {
	return (
		<Container className={cn(cls.container, [className])}>
			<Gallery className={cn(cls.gallery)} images={images} />
		</Container>
	)
}

export { ProductCardInfo }
