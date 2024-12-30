import { ButtonHTMLAttributes, FC } from 'react'
import cls from './index.module.scss'
import { Button } from '@/components/ui'
import { cn } from '@/lib'

interface Props
	extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {}
const OrderWithdrawal: FC<Props> = ({ className, ...other }) => {
	return (
		<Button
			secondColor='var(--green-100)'
			theme='outline'
			size='low'
			className={cn(cls.btn, [className])}
			{...other}
		>
			Заказать выплату
		</Button>
	)
}

export { OrderWithdrawal }
