import { FC } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import { TActiveSwitchItem } from '..'
import { SwitcherItem } from '../SwitcherItem'
import cls from './index.module.scss'

interface Props extends TClassName {
	active: string
	setActive: (value: TActiveSwitchItem) => void
}
const Switcher: FC<Props> = ({ active, setActive, className }) => {
	return (
		<ul className={cn(cls.wrapper, [className])}>
			<SwitcherItem
				active={active}
				setActive={setActive}
				type='all'
				className={cn(cls.item)}
			>
				Все транзакции
			</SwitcherItem>
			<SwitcherItem
				active={active}
				setActive={setActive}
				type='replenishments'
				className={cn(cls.item)}
			>
				Пополнения
			</SwitcherItem>
			<SwitcherItem
				active={active}
				setActive={setActive}
				type='withdrawals'
				className={cn(cls.item)}
			>
				Выводы
			</SwitcherItem>
		</ul>
	)
}

export { Switcher }
