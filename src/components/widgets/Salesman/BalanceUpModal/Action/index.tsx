'use client'
import { FC, MouseEventHandler } from 'react'
import { TClassName, TState } from '@/types'
import { cn } from '@/lib'
import { TModalStep } from '..'
import { useModalState } from '@/hooks'
import { SALESMAN_BALANCE_UP_MODAL } from '@/constants'
import Image from 'next/image'
import { Button, Typography } from '@/components/ui'
import cls from './index.module.scss'

interface Props extends TClassName {
	setStep: TState<TModalStep>
}
const Action: FC<Props> = ({ className, setStep }) => {
	const hideModal = useModalState(state => state.hideModal)
	const handleUp: MouseEventHandler = () => {
		setStep('success')
	}
	const handleBack: MouseEventHandler = () => {
		hideModal({ slug: SALESMAN_BALANCE_UP_MODAL })
	}

	return (
		<div className={cn(cls.wrapper, [className])}>
			<div className={cn(cls.head)}>
				<Image
					src={'/images/salesman/home/action-impossible.svg'}
					alt='Не хватает средств'
					width={48}
					height={48}
				/>
				<div className={cn(cls.info)}>
					<Typography font='Inter-SB' size={18} tag='h2'>
						Вам не хватает 400 ₽
					</Typography>
					<Typography font='Inter-R' size={14} tag='h3'>
						На основном балансе - 5600 ₽
					</Typography>
				</div>
			</div>
			<div className={cn(cls.actions)}>
				<Button
					className={cn(cls.btn)}
					size='mid'
					theme='outline'
					onClick={handleBack}
				>
					Назад
				</Button>
				<Button
					className={cn(cls.btn)}
					size='mid'
					theme='fill'
					onClick={handleUp}
				>
					Пополнить баланс
				</Button>
			</div>
		</div>
	)
}

export { Action }
