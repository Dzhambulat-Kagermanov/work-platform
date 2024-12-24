import { FC } from 'react'
import { TClassName, TModuleClassName, TProductItemProps } from '@/shared/types'
import { cn } from '@/shared/lib'
import { Container } from '@/shared/ui'
import { Gallery } from './Gallery'
import { Content } from './Content'
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
		salesman,
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
							salesman,
							tooltip,
							id,
							isFavorite,
						}}
					/>
				</div>
			</Container>
		</div>
	)
}

export { ProductCardInfo }
