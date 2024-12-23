import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { BreadCrumbs, TBreadCrumbProps } from '@/shared/ui/BreadCrumbs'
import { cn } from '@/shared/lib'
import { Container } from '@/shared/ui'
import cls from './index.module.scss'

interface Props extends TClassName {
	items: TBreadCrumbProps[]
}
const ProductCardCrumbs: FC<Props> = ({ items, className }) => {
	return (
		<Container className={cn(cls.container, [className])}>
			<BreadCrumbs items={items} />
		</Container>
	)
}

export { ProductCardCrumbs }
