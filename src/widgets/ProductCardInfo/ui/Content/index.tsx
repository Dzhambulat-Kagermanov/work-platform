import { FC, memo } from 'react'
import { TClassName, TProductItemProps } from '@/shared/types'
import { cn } from '@/shared/lib'
import { ContentHead } from '../ContentHead'
import { ContentSales } from '../ContentSales'
import { ContentActions } from '../ContentActions'
import cls from './index.module.scss'

interface Props extends TClassName {
	data: Omit<
		TProductItemProps,
		'previewImage' | 'productDescription' | 'images' | 'quantities'
	>
}
const Content: FC<Props> = memo(
	({ className, data: { name, price, salesman, tooltip, id, isFavorite } }) => {
		return (
			<section className={cn(cls.content, [className])}>
				<ContentHead
					className={cn(cls.head)}
					name={name}
					price={price}
					salesman={salesman}
					tooltip={tooltip}
				/>
				<ContentSales salesman={salesman} className={cn(cls.sales)} />
				<ContentActions
					id={id}
					className={cn(cls.actions)}
					isFavorite={isFavorite}
				/>
			</section>
		)
	}
)

export { Content }
