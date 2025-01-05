import { FC, MouseEventHandler } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import { Typography, Button } from '@/components/ui'
import { SALESMAN_BALANCE_UP_MODAL } from '@/constants'
import { useModalState } from '@/hooks'
import Image from 'next/image'
import cls from './index.module.scss'

interface Props extends TClassName {}
const Success: FC<Props> = ({ className }) => {
	const hideModal = useModalState(state => state.hideModal)
	const handleConfirm: MouseEventHandler = () => {
		hideModal({ slug: SALESMAN_BALANCE_UP_MODAL })
	}

	return (
		<div className={cn(cls.wrapper, [className])}>
			<div className={cn(cls.head)}>
				<Image
					src={'/images/salesman/balance/success.svg'}
					alt='Не хватает средств'
					width={48}
					height={48}
				/>
				<div className={cn(cls.info)}>
					<Typography font='Inter-SB' size={18} tag='h2'>
						Основной баланс пополнен
					</Typography>
					<Typography font='Inter-R' size={14} tag='h3'>
						Вы пополнили баланс кабинета на 500 ₽
					</Typography>
				</div>
			</div>
			<div className={cn(cls.actions)}>
				<Button
					className={cn(cls.btn)}
					size='mid'
					theme='fill'
					onClick={handleConfirm}
				>
					Готово
				</Button>
			</div>
		</div>
	)
}

export { Success }
