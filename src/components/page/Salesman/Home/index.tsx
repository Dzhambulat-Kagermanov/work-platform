import { FC, Suspense } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import { Typography } from '@/components/ui'
import { HomeCrumbs } from '@/components/widgets/Salesman/HomeCrumbs'
import {
	HomePagesSwitcher,
	TSalesmanHomePageType,
} from '@/components/widgets/Salesman/HomePagesSwitcher'
import { HomeActions } from '@/components/widgets/Salesman/HomeActions'
import { HomeAddProductModal } from '@/components/widgets/Salesman/HomeAddProductModal'
import { HomeProductsContent } from '@/components/widgets/Salesman/HomeProductsContent'
import { TChatType } from '@/components/widgets/Buyer/DeliverySidebar/types'
import { HomeRansomsContent } from '@/components/widgets/Salesman/HomeRansomsContent'
import { HomeAdvertisementsContent } from '@/components/widgets/Salesman/HomeAdvertisementsContent'
import cls from './index.module.scss'

interface Props extends TClassName {
	homePageType: TSalesmanHomePageType
	chatType: TChatType
}
const HomePage: FC<Props> = ({ className, homePageType, chatType }) => {
	return (
		<div className={cn(cls.main, [className])}>
			<Typography tag='h1' font='Inter-SB' size={30}>
				Привет, Продавец №1
			</Typography>
			<HomeCrumbs homePageType={homePageType} className={cn(cls.crumbs)} />
			<Suspense fallback={<></>}>
				<HomePagesSwitcher className={cn(cls.switcher)} />
			</Suspense>
			<HomeActions homePageType={homePageType} className={cn(cls.actions)} />
			{homePageType === null ? (
				<HomeProductsContent className={cn(cls.products)} />
			) : homePageType === 'ransoms' ? (
				<HomeRansomsContent className={cn(cls.ransoms)} chatType={chatType} />
			) : (
				<HomeAdvertisementsContent className={cn(cls.advertisement)} />
			)}
			<HomeAddProductModal className={cn(cls.add_product_modal)} />
		</div>
	)
}

export { HomePage }
