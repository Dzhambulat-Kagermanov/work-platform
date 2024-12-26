'use client'
import { FC, MouseEvent } from 'react'
import { TClassName, TProductItemProps } from '@/types'
import { Button } from '@/components/ui'
import cls from './index.module.scss'

interface Props
	extends TClassName,
		Pick<TProductItemProps, 'id' | 'isFavorite'> {}
const ProductCardAddFavorite: FC<Props> = ({ className, id, isFavorite }) => {
	const handleClick = (e: MouseEvent) => {}
	return (
		<Button
			theme={isFavorite ? 'outline' : 'fill'}
			onClick={handleClick}
			disabled={isFavorite}
		>
			{isFavorite ? 'В избранном' : 'В избранное'}
		</Button>
	)
}

export { ProductCardAddFavorite }
