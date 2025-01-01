import { FC } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import cls from './index.module.scss'
import { Container, Typography } from '@/components/ui'
import { CategoryCategories } from '@/components/widgets/Buyer/CategoryCategories'

interface Props extends TClassName {}
const CategoryPage: FC<Props> = ({ className }) => {
	return (
		<main className={cn(cls.category, [className])}>
			<Container
				tag='section'
				className={cn(cls.container, ['modules-gap-top'])}
			>
				<Typography
					tag='h1'
					className={cn(cls.title, ['modules-gap-bottom'])}
					font='Inter-SB'
					size={20}
				>
					Категории:
				</Typography>
				<CategoryCategories className={cn(cls.categories)} />
			</Container>
		</main>
	)
}

export { CategoryPage }
