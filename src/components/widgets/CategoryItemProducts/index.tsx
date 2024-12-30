import { FC } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import { Content } from './Content'
import { Head } from './Head'
import cls from './index.module.scss'

interface Props extends TClassName {
	subcategory?: string
}
const CategoryItemProducts: FC<Props> = ({ subcategory, className }) => {
	return (
		<section className={cn(cls.wrapper, [className])}>
			<Head className={cn(cls.head)} />
			<Content className={cn(cls.content)} />
		</section>
	)
}

export { CategoryItemProducts }
