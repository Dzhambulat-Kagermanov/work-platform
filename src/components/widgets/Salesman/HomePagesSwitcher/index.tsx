'use client'
import { FC } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import { Item } from './Item'
import { useSearchParams } from 'next/navigation'
import cls from './index.module.scss'

export type TSalesmanHomePageType = 'products' | 'advertisements' | 'ransoms'

interface Props extends TClassName {}
const HomePagesSwitcher: FC<Props> = ({ className }) => {
	const queryParams = useSearchParams()
	const activeSlug = queryParams.get('pageType') as TSalesmanHomePageType

	return (
		<nav className={cn(cls.wrapper, [className])}>
			<Item
				className={cn(cls.item)}
				activeSlug={activeSlug}
				slug='products'
				text='Товары (10)'
			/>
			<Item
				className={cn(cls.item)}
				activeSlug={activeSlug}
				slug='advertisements'
				text='Объявления'
			/>
			<Item
				className={cn(cls.item)}
				activeSlug={activeSlug}
				slug='ransoms'
				text='Выкупы'
			/>
		</nav>
	)
}

export { HomePagesSwitcher }
