'use client'
import { ButtonHTMLAttributes, FC } from 'react'
import { Button } from '@/components/ui'
import { cn } from '@/lib'
import cls from './index.module.scss'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}
const AccountBalanceMore: FC<Props> = ({ className, children, ...other }) => {
	const handleClick = () => {}

	return (
		<Button
			theme='outline'
			size='low'
			className={cn(cls.btn, [className])}
			onClick={handleClick}
			{...other}
		>
			Подробнее
		</Button>
	)
}

export { AccountBalanceMore }
