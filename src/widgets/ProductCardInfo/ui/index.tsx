import { FC } from 'react'
import { TModuleClassName, TProductItemProps } from '@/shared/types'
import { cn } from '@/shared/lib'
import { Container } from '@/shared/ui'
import { Gallery } from './Gallery'
import { Content } from './Content'
import { Switcher } from './Switcher'
import { SimilarProducts } from './SimilarProducts'
import cls from './index.module.scss'

interface Props extends TModuleClassName {
	data: TProductItemProps
}
const ProductCardInfo: FC<Props> = ({
	className,
	wrapperClassName,
	data: {
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
	},
}) => {
	return (
		<div className={cn(cls.wrapper, [wrapperClassName])}>
			<Container className={cn(cls.container, [className])}>
				<div className={cn(cls.head)}>
					<Gallery
						className={cn(cls.gallery)}
						images={images}
						isFavorite={isFavorite}
					/>
					<Content
						className={cn(cls.content)}
						data={{
							name,
							price,
							salesmanId,
							tooltip,
							id,
							isFavorite,
						}}
					/>
				</div>
				<Switcher
					id={id}
					productDescription={productDescription}
					className={cn(cls.switcher)}
				/>
				<SimilarProducts id={id} className={cn(cls.similar_products)} />
			</Container>
		</div>
	)
}

export { ProductCardInfo }
