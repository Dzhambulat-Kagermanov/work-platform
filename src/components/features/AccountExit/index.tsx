'use client'
import { ButtonHTMLAttributes, FC } from 'react'
import { Button } from '@/components/ui'
import { cn } from '@/lib'
import cls from './index.module.scss'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}
const AccountExit: FC<Props> = ({ className, children, ...other }) => {
	const handleClick = () => {}

	return (
		<Button
			{...other}
			className={cn(cls.btn, [className])}
			theme='outline'
			size='low'
			onClick={handleClick}
		>
			Выйти из аккаунта
		</Button>
	)
}

export { AccountExit }
