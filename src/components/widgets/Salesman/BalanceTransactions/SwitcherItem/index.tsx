import { FC } from 'react'
import { TChildren, TClassName } from '@/types'
import { TActiveSwitchItem } from '..'
import { cn } from '@/lib'
import { Typography } from '@/components/ui'
import cls from './index.module.scss'

interface Props extends TClassName, TChildren {
	active: string
	setActive: (value: TActiveSwitchItem) => void
	type: TActiveSwitchItem
}
const SwitcherItem: FC<Props> = ({
	active,
	setActive,
	type,
	className,
	children,
}) => {
	const handleClick = () => {
		setActive(type)
	}

	return (
		<li
			className={cn(cls.wrapper, [className], {
				[cls.active]: active === type,
			})}
			onClick={handleClick}
		>
			<Typography font='Inter-SB' size={14}>
				{children}
			</Typography>
		</li>
	)
}

export { SwitcherItem }
