import { FC } from 'react'
import { TClassName, TProductItemProps } from '@/shared/types'
import { cn } from '@/shared/lib'
import { ProductCardAddFavorite } from '@/features/ProductCardAddFavorite'
import { ProductCardOrder } from '@/features/ProductCardOrder'
import cls from './index.module.scss'

interface Props
	extends TClassName,
		Pick<TProductItemProps, 'id' | 'isFavorite'> {}
const ContentActions: FC<Props> = ({ id, className, isFavorite }) => {
	return (
		<div className={cn(cls.wrapper, [className])}>
			<ProductCardAddFavorite
				id={id}
				isFavorite={isFavorite}
				className={cn(cls.btn, [cls.favorite])}
			/>
			<ProductCardOrder id={id} className={cn(cls.btn, [cls.order])} />
		</div>
	)
}

export { ContentActions }
