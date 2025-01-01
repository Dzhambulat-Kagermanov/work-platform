'use client'
import { ButtonHTMLAttributes, FC } from 'react'
import { Button } from '@/components/ui'
import { cn } from '@/lib'
import { useRouter } from 'next/navigation'
import cls from './index.module.scss'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}
const AccountBalanceMore: FC<Props> = ({ className, children, ...other }) => {
	const router = useRouter()
	const handleClick = () => {
		router.push('/buyer/account/balance')
	}

	return (
		<Button
			secondColor='var(--green-100)'
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
