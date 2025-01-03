import { FC } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import { Typography } from '@/components/ui'
import { BalanceInfo } from '@/components/widgets/Salesman/BalanceInfo'
import { BalanceTransactions } from '@/components/widgets/Salesman/BalanceTransactions'
import cls from './index.module.scss'

interface Props extends TClassName {}
const BalancePage: FC<Props> = ({ className }) => {
	return (
		<div className={cn(cls.main, [className])}>
			<Typography font='Inter-SB' size={30} tag='h1'>
				Баланс
			</Typography>
			<Typography font='Inter-R' size={16} tag='h2'>
				Общая информация
			</Typography>
			<BalanceInfo className={cn(cls.info)} />
			<BalanceTransactions className={cn(cls.transactions)} />
		</div>
	)
}

export { BalancePage }
