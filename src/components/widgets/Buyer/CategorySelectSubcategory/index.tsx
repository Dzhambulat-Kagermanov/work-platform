import { FC } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import { Container } from '@/components/ui'
import { CategoryItemCrumbs } from '../CategoryItemCrumbs'
import { CategoryItemSubcategories } from '../CategoryItemSubcategories'
import cls from './index.module.scss'

interface Props extends TClassName {
	slug: string
	subcategory?: string
}
const CategorySelectSubcategory: FC<Props> = ({
	className,
	slug,
	subcategory,
}) => {
	return (
		<Container tag='section' className={cn(cls.wrapper, [className])}>
			<CategoryItemCrumbs
				subcategory={subcategory}
				slug={slug}
				className={cn(cls.crumbs, ['modules-gap-top'])}
			/>
			<CategoryItemSubcategories
				slug={slug}
				className={cn(cls.subcategories, [
					'modules-gap-top',
					'modules-gap-bottom',
				])}
			/>
		</Container>
	)
}

export { CategorySelectSubcategory }
