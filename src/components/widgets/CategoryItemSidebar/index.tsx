'use client'
import { FC } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import { SUBCATEGORIES } from './constants/subcategories'
import { Item } from './Item'
import { SM_BIG } from '@/constants'
import { useScreen } from '@/hooks'
import cls from './index.module.scss'

interface Props extends TClassName {
	subcategory?: string
	slug: string
}
const CategoryItemSidebar: FC<Props> = ({ className, subcategory, slug }) => {
	const width = useScreen()
	return (
		<>
			{width > SM_BIG && (
				<aside className={cn(cls.wrapper, [className])}>
					<ul className={cn(cls.group)}>
						{SUBCATEGORIES.map(({ productsQnt, title }) => {
							return (
								<Item
									subcategory={subcategory}
									linkCls={cn(cls.link)}
									productsQnt={productsQnt}
									slug={slug}
									title={title}
									className={cn(cls.item)}
									key={title}
								/>
							)
						})}
					</ul>
				</aside>
			)}
		</>
	)
}

export { CategoryItemSidebar }
