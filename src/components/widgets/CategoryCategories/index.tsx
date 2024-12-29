import { FC } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import { CATEGORIES } from '@/components/page/Category/constants/categories'
import { CategoryItem } from '@/components/entities/CategoryItem'
import cls from './index.module.scss'

interface Props extends TClassName {}
const CategoryCategories: FC<Props> = ({ className }) => {
	return (
		<ul className={cn(cls.wrapper, [className])}>
			{CATEGORIES.map(({ image, productsQnt, title }) => {
				return (
					<CategoryItem
						key={title}
						tag='li'
						image={image}
						productsQnt={productsQnt}
						title={title}
						className={cn(cls.item)}
						titleCls={cn(cls.item_title)}
					/>
				)
			})}
		</ul>
	)
}

export { CategoryCategories }
