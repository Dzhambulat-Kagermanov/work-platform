import { FC } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import { CategoryItemCrumbs } from '@/components/widgets/Buyer/CategoryItemCrumbs'
import { Container } from '@/components/ui'
import { CategoryItemSidebar } from '@/components/widgets/Buyer/CategoryItemSidebar'
import { CategoryItemProducts } from '@/components/widgets/Buyer/CategoryItemProducts'
import { FilterModalsLayout } from '@/components/layouts/FilterModals'
import cls from './index.module.scss'

interface Props extends TClassName {
	slug: string
	subcategory?: string
}
const CategoryItemPage: FC<Props> = ({ className, slug, subcategory }) => {
	return (
		<main className={cn(cls.category, [className])}>
			<CategoryItemCrumbs
				className={cn(cls.crumbs, ['modules-gap-top'])}
				slug={slug}
				subcategory={subcategory}
			/>
			<Container className={cn(cls.content)}>
				<CategoryItemSidebar
					className={cn(cls.sidebar)}
					slug={slug}
					subcategory={subcategory}
				/>
				<CategoryItemProducts
					className={cn(cls.products)}
					subcategory={subcategory}
				/>
			</Container>
			<FilterModalsLayout />
		</main>
	)
}

export { CategoryItemPage }
