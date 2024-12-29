import { FC } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import { AccountHead } from '@/components/widgets/AccountHead'
import { SalesmanInfoStatistic } from '@/components/widgets/SalesmanInfoStatistic'
import { SalesmanInfoProducts } from '@/components/widgets/SalesmanInfoProducts'
import { SalesmanInfoReviews } from '@/components/widgets/SalesmanInfoReviews'
import { SalesmanInfoBackBtn } from '@/components/widgets/SalesmanInfoBackBtn'
import cls from './index.module.scss'

interface Props extends TClassName {}
const SalesmanInfoPage: FC<Props> = ({ className }) => {
	return (
		<main className={cn(cls.salesman, [className])}>
			<SalesmanInfoBackBtn className={cn(cls.back_btn)} />
			<AccountHead className={cn(cls.head)} withoutAvatarChange />
			<SalesmanInfoStatistic
				className={cn(cls.statistic)}
				cashbackPaid={10550}
				productsGrate={342}
				productsRating={4.7}
				successfulBuybacks={91}
			/>
			<SalesmanInfoProducts className={cn(cls.products)} />
			<SalesmanInfoReviews className={cn(cls.reviews)} />
		</main>
	)
}

export { SalesmanInfoPage }
