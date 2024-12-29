import { FC } from 'react'
import { TClassName } from '@/types'
import { BreadCrumbs, TBreadCrumbProps } from '@/components/ui/BreadCrumbs'
import { cn } from '@/lib'
import { Container } from '@/components/ui'
import cls from './index.module.scss'

interface Props extends TClassName {
	items: TBreadCrumbProps[]
}
const ProductCardCrumbs: FC<Props> = ({ items, className }) => {
	return (
		<Container className={cn(cls.container, [className])}>
			<BreadCrumbs
				items={items}
				className={cn(cls.crumbs)}
				linkCls={cn(cls.item)}
			/>
		</Container>
	)
}

export { ProductCardCrumbs }
