import { FC, memo } from 'react'
import { TClassName, TProductItemProps } from '@/shared/types'
import { cn } from '@/shared/lib'
import { ContentHead } from '../ContentHead'
import cls from './index.module.scss'
import { ContentSales } from '../ContentSales'

interface Props extends TClassName {
	data: Omit<
		TProductItemProps,
		| 'previewImage'
		| 'productDescription'
		| 'id'
		| 'images'
		| 'isFavorite'
		| 'quantities'
	>
}
const Content: FC<Props> = memo(
	({ className, data: { name, price, salesman, tooltip } }) => {
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
			</section>
		)
	}
)

export { Content }
