import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { Container } from '@/shared/ui'
import { cn } from '@/shared/lib'
import { Head } from './Head'
import { Sort } from './Sort'
import { Products } from './Products'
import cls from './index.module.scss'

interface Props extends TClassName {}
const HomeProducts: FC<Props> = ({ className }) => {
	return (
		<Container tag='section' className={cn(cls.container, [className])}>
			<div className={cn(cls.content)}>
				<Head className={cn(cls.head)} />
				<Sort className={cn(cls.sort)} />
			</div>
			<Products className={cn(cls.products)} />
		</Container>
	)
}

export { HomeProducts }
