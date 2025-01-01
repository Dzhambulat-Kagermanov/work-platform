import { FC } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import { Typography } from '@/components/ui'
import { OrderWithdrawal } from '@/components/features/OrderWithdrawal'
import cls from './index.module.scss'

interface Props extends TClassName {}
const BalanceInfo: FC<Props> = ({ className }) => {
	return (
		<section className={cn(cls.wrapper, [className])}>
			<div className={cn(cls.item, [cls.withdrawal])}>
				<Typography font='Inter-B' size={30} tag='h2'>
					3500 ₽
				</Typography>
				<Typography font='Inter-R' size={14} tag='h3'>
					Доступно к выводу
				</Typography>
				<OrderWithdrawal className={cn(cls.order_withdrawal_btn)} />
			</div>
			<div className={cn(cls.item, [cls.confirmation])}>
				<Typography font='Inter-B' size={30} tag='h2'>
					5 100 ₽
				</Typography>
				<Typography font='Inter-R' size={14} tag='h3'>
					На подтверждении
				</Typography>
			</div>
		</section>
	)
}

export { BalanceInfo }
