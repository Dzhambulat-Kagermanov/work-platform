'use client'
import { FC, useState } from 'react'
import { cn } from '@/lib'
import { TClassName } from '@/types'
import { Action, Input, Typography } from '@/components/ui'
import { Switcher } from './Switcher'
import { SearchIcon } from '@/icons'
import { Table } from './Table'
import { useScreen } from '@/hooks'
import { SM_MID } from '@/constants'
import { Pagination } from '../../shared/Pagination'
import cls from './index.module.scss'

export type TActiveSwitchItem = 'all' | 'replenishments' | 'withdrawals'

interface Props extends TClassName {}
const BalanceTransactions: FC<Props> = ({ className }) => {
	const width = useScreen()
	const [active, setActive] = useState<TActiveSwitchItem>('all')

	return (
		<section className={cn(cls.wrapper, [className])}>
			<Typography font='Inter-SB' size={width > SM_MID ? 32 : 20} tag='h2'>
				Транзакции:
			</Typography>
			<Switcher
				className={cn(cls.switcher)}
				active={active}
				setActive={setActive}
			/>
			<div className={cn(cls.actions)}>
				<Action
					className={cn(cls.action)}
					actionBtnText='Выбрать товар'
					actions={[
						{ link: '#', text: 'Товар 1' },
						{ link: '#', text: 'Товар 2' },
						{ link: '#', text: 'Товар 3' },
						{ link: '#', text: 'Товар 4' },
					]}
				/>
				<Input
					icon={<SearchIcon color='var(--grey-200)' className={cn(cls.icon)} />}
					wrapperCls={cn(cls.inp_wrapper)}
					inpCls={cn(cls.inp)}
					placeholder='Введите ID выкупа'
				/>
			</div>
			<div className={cn(cls.table_wrapper)}>
				<Table wrapperCls={cn(cls.table)} active={active} />
				<Pagination
					className={cn(cls.pagination)}
					pages={{
						current: 1,
						max: 10,
					}}
				/>
			</div>
		</section>
	)
}

export { BalanceTransactions }
