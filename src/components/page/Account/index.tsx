import { FC } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import { AccountHead } from '@/components/widgets/AccountHead'
import { Container } from '@/components/ui'
import { AccountForm } from '@/components/widgets/AccountForm'
import { AccountBalance } from '@/components/widgets/AccountBalance'
import { AccountNotifications } from '@/components/widgets/AccountNotifications'
import { AccountStatistic } from '@/components/widgets/AccountStatistic'
import cls from './index.module.scss'

interface Props extends TClassName {}
const AccountPage: FC<Props> = ({ className }) => {
	return (
		<main className={cn(cls.account, [className, 'modules-gap-top'])}>
			<AccountHead className={cn(cls.head, ['modules-gap-top'])} />
			<Container className={cn(cls.dashboard)}>
				<AccountForm className={cn(cls.form)} />
				<div className={cn(cls.half)}>
					<AccountBalance className={cn(cls.balance)} />
					<AccountNotifications className={cn(cls.notifications)} />
					<AccountStatistic
						className={cn(cls.statistic)}
						cashbackPaid={10550}
						productsGrate={342}
						productsRating={4.7}
						successfulBuybacks={91}
					/>
				</div>
			</Container>
		</main>
	)
}

export { AccountPage }
