'use client'
import { FC } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import { Item } from './Item'
import { useSearchParams } from 'next/navigation'
import cls from './index.module.scss'

export type TSalesmanHomePageType = 'advertisements' | 'ransoms' | null

interface Props extends TClassName {}
const HomePagesSwitcher: FC<Props> = ({ className }) => {
	const queryParams = useSearchParams()
	const activeSlug = queryParams.get('homePageType') as TSalesmanHomePageType

	return (
		<nav className={cn(cls.wrapper, [className])}>
			<Item
				slug={null}
				selectedProducts={1}
				className={cn(cls.item)}
				activeSlug={activeSlug}
				text='Товары (10)'
			/>
			<Item
				selectedProducts={0}
				className={cn(cls.item)}
				activeSlug={activeSlug}
				slug='advertisements'
				text='Объявления'
			/>
			<Item
				selectedProducts={0}
				className={cn(cls.item)}
				activeSlug={activeSlug}
				slug='ransoms'
				text='Выкупы'
			/>
		</nav>
	)
}

export { HomePagesSwitcher }
