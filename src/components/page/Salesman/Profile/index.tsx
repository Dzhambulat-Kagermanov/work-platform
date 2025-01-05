'use client'
import { TClassName } from '@/types'
import { FC } from 'react'
import { cn } from '@/lib'
import { Container } from '@/components/ui'
import { ProfileForm } from '@/components/widgets/Salesman/ProfileForm'
import { ProfileHead } from '@/components/entities/ProfileHead'
import { ProfileNotifications } from '@/components/widgets/Salesman/ProfileNotifications'
import { ProfileStatistic } from '@/components/widgets/Salesman/ProfileStatistic'
import { ExitBtnMobile } from './ExitBtnMobile'
import { ProfileStatisticInfo } from '@/components/widgets/Salesman/ProfileStatisticInfo'
import { ExitAccountModal } from '@/components/widgets/shared/ExitAccountModal'
import { useScreen } from '@/hooks'
import { MD_BIG } from '@/constants'
import cls from './index.module.scss'

interface Props extends TClassName {}
const ProfilePage: FC<Props> = ({ className }) => {
	const width = useScreen()
	return (
		<div className={cn(cls.main)}>
			<div className={cn(cls.account, [className])}>
				<ProfileHead
					className={cn(cls.head)}
					id={21834}
					name='Екатерина М.'
					rating={4.7}
					registerDate='19.08.2024'
					avatarImage=''
					background='/images/account/head-background.png'
				/>
				<Container className={cn(cls.dashboard)}>
					<ProfileForm className={cn(cls.form)} />
					<div className={cn(cls.half)}>
						<ProfileNotifications className={cn(cls.notifications)} />
						<ProfileStatisticInfo className={cn(cls.statistic_info)} />
						<ProfileStatistic
							className={cn(cls.statistic)}
							cashbackPaid={10550}
							productsGrate={342}
							productsRating={4.7}
							successfulBuybacks={91}
						/>
					</div>
					{width <= MD_BIG && (
						<ExitBtnMobile className={cn(cls.exit_btn_mobile)} />
					)}
					<ExitAccountModal className={cn(cls.exit_account_modal)} />
				</Container>
			</div>
		</div>
	)
}

export { ProfilePage }
