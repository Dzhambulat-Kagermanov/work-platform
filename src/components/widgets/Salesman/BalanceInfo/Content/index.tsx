import { FC } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import { Button, Typography } from '@/components/ui'
import cls from './index.module.scss'

interface Props extends TClassName {}
const Content: FC<Props> = ({ className }) => {
	return (
		<div className={cn(cls.wrapper, [className])}>
			<div className={cn(cls.content)}>
				<div className={cn(cls.available)}>
					<Typography font='Inter-R' size={12} tag='h5'>
						Доступно
					</Typography>
					<Typography font='Inter-SB' size={26}>
						550 ₽
					</Typography>
				</div>
				<div className={cn(cls.freeze)}>
					<Typography font='Inter-R' size={12} tag='h5'>
						Заморожено в объявлениях
					</Typography>
					<Typography font='Inter-SB' size={26}>
						3 000 ₽
					</Typography>
				</div>
			</div>
			<Button
				size='mid'
				theme='fill'
				primaryColor='var(--green-100)'
				secondColor='var(--white-300)'
				className={cn(cls.balance_up_btn)}
			>
				Пополнить
			</Button>
		</div>
	)
}

export { Content }
