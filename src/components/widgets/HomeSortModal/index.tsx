'use client'
import { FC, useState } from 'react'
import { TClassName } from '@/types'
import { ModalBase, Typography } from '@/components/ui'
import { HOME_SORT_MODAL } from '@/constants'
import { cn } from '@/lib'
import { Item } from './Item'
import { slugs } from './constants/slugs'
import cls from './index.module.scss'

interface Props extends TClassName {}
const HomeSortModal: FC<Props> = ({ className }) => {
	const [sortItem, setSortItem] = useState<string>('По дате публикации')

	return (
		<ModalBase slug={HOME_SORT_MODAL} className={cn(cls.wrapper, [className])}>
			<div className={cn(cls.content)}>
				<Typography
					tag='h2'
					font='Inter-SB'
					size={18}
					className={cn(cls.title)}
				>
					Сортировка:
				</Typography>
				<ul className={cn(cls.group)}>
					{slugs.map(slug => {
						return (
							<Item
								activeSlug={sortItem}
								setActiveSlug={setSortItem}
								key={slug}
								slug={slug}
								tag='li'
								className={cn(cls.item)}
								onClick={() => {}}
							/>
						)
					})}
				</ul>
			</div>
		</ModalBase>
	)
}

export { HomeSortModal }
