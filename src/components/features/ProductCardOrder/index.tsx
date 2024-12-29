'use client'
import { FC, MouseEvent } from 'react'
import { TClassName, TProductItemProps } from '@/types'
import { Button } from '@/components/ui'
import cls from './index.module.scss'
import { cn } from '@/lib'

interface Props extends TClassName, Pick<TProductItemProps, 'id'> {}
const ProductCardOrder: FC<Props> = ({ className, id }) => {
	const handleClick = (e: MouseEvent) => {}
	return (
		<Button
			theme='fill'
			onClick={handleClick}
			className={cn(cls.btn, [className])}
		>
			Заказать
		</Button>
	)
}

export { ProductCardOrder }
