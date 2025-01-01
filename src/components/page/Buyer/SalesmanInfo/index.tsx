import { FC } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import { AccountHead } from '@/components/widgets/Buyer/AccountHead'
import { SalesmanStatistic } from '@/components/widgets/Buyer/SalesmanStatistic'
import { SalesmanProducts } from '@/components/widgets/Buyer/SalesmanProducts'
import { SalesmanReviews } from '@/components/widgets/Buyer/SalesmanReviews'
import { SalesmanBackBtn } from '@/components/widgets/Buyer/SalesmanBackBtn'
import cls from './index.module.scss'

interface Props extends TClassName {}
const SalesmanInfoPage: FC<Props> = ({ className }) => {
	return (
		<main className={cn(cls.salesman, [className])}>
			<SalesmanBackBtn className={cn(cls.back_btn, ['modules-gap-bottom'])} />
			<AccountHead className={cn(cls.head)} withoutAvatarChange />
			<SalesmanStatistic
				className={cn(cls.statistic)}
				cashbackPaid={10550}
				productsGrate={342}
				productsRating={4.7}
				successfulBuybacks={91}
			/>
			<SalesmanProducts className={cn(cls.products)} />
			<SalesmanReviews className={cn(cls.reviews)} />
		</main>
	)
}

export { SalesmanInfoPage }
