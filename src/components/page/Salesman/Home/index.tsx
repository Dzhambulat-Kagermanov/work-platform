import { FC, Suspense } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import { Typography } from '@/components/ui'
import { HomeCrumbs } from '@/components/widgets/Salesman/HomeCrumbs'
import { HomePagesSwitcher } from '@/components/widgets/Salesman/HomePagesSwitcher'
import { HomeActions } from '@/components/widgets/Salesman/HomeActions'
import { HomeAddProductModal } from '@/components/widgets/Salesman/HomeAddProductModal'
import { HomeTable } from '@/components/widgets/Salesman/HomeTable'
import cls from './index.module.scss'

interface Props extends TClassName {}
const HomePage: FC<Props> = ({ className }) => {
	return (
		<div className={cn(cls.main, [className])}>
			<Typography tag='h1' font='Inter-SB' size={30}>
				Привет, Продавец №1
			</Typography>
			<HomeCrumbs className={cn(cls.crumbs)} />
			<Suspense fallback={<></>}>
				<HomePagesSwitcher className={cn(cls.switcher)} />
			</Suspense>
			<HomeActions className={cn(cls.actions)} />
			<HomeTable className={cn(cls.table)} />
			<HomeAddProductModal className={cn(cls.add_product_modal)} />
		</div>
	)
}

export { HomePage }
