import { CategoryItemPage } from '@/components/page/CategoryItem'
import { FC } from 'react'

interface Props {
	searchParams: Promise<{
		category: string
		subcategory: string
	}>
}
const CategoryItem: FC<Props> = async ({ searchParams }) => {
	const { category, subcategory } = await searchParams

	return <CategoryItemPage slug={category} subcategory={subcategory} />
}

export default CategoryItem
