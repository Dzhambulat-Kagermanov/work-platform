'use client'
import { FC, MouseEvent } from 'react'
import { TClassName, TProductItemProps } from '@/shared/types'
import { Button } from '@/shared/ui'
import cls from './index.module.scss'

interface Props extends TClassName, Pick<TProductItemProps, 'id'> {}
const ProductCardOrder: FC<Props> = ({ className, id }) => {
	const handleClick = (e: MouseEvent) => {}
	return (
		<Button theme='fill' onClick={handleClick}>
			Заказать
		</Button>
	)
}

export { ProductCardOrder }
