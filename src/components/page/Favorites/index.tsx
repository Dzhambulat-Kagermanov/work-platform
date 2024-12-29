import { FC } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import { FavoritesHead } from '@/components/widgets/FavoritesHead'
import { FavoritesProducts } from '@/components/widgets/FavoritesProducts'
import cls from './index.module.scss'

interface Props extends TClassName {}
const FavoritesPage: FC<Props> = ({ className }) => {
	return (
		<main className={cn(cls.favorites, [className])}>
			<FavoritesHead className={cn(cls.head, ['modules-gap-top'])} />
			<FavoritesProducts className={cn(cls.products)} />
		</main>
	)
}

export { FavoritesPage }
