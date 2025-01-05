import { FC } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import { SalesmanStatistic } from '@/components/widgets/Buyer/SalesmanStatistic'
import { SalesmanProducts } from '@/components/widgets/Buyer/SalesmanProducts'
import { SalesmanBackBtn } from '@/components/widgets/Buyer/SalesmanBackBtn'
import { ProfileHead } from '@/components/entities/ProfileHead'
import { UserReviews } from '@/components/widgets/shared/UserReviews'
import { REVIEWS } from './constants/reviews'
import cls from './index.module.scss'

interface Props extends TClassName {}
const SalesmanInfoPage: FC<Props> = ({ className }) => {
	return (
		<main className={cn(cls.salesman, [className])}>
			<SalesmanBackBtn className={cn(cls.back_btn, ['modules-gap-bottom'])} />
			<ProfileHead
				className={cn(cls.head)}
				id={21834}
				name='Екатерина М.'
				rating={4.7}
				registerDate='19.08.2024'
				avatarImage=''
				background='/images/account/head-background.png'
				withoutAvatarChange
			/>
			<SalesmanStatistic
				className={cn(cls.statistic)}
				cashbackPaid={10550}
				productsGrate={342}
				productsRating={4.7}
				successfulBuybacks={91}
			/>
			<SalesmanProducts className={cn(cls.products)} />
			<UserReviews reviews={REVIEWS} className={cn(cls.reviews)} />
		</main>
	)
}

export { SalesmanInfoPage }
