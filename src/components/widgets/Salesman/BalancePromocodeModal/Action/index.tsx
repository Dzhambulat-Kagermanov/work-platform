import { FC, MouseEventHandler } from 'react'
import { TClassName, TState } from '@/types'
import { cn } from '@/lib'
import { Typography, Input, Button } from '@/components/ui'
import { SALESMAN_BALANCE_PROMOCODE_MODAL } from '@/constants'
import { useModalState } from '@/hooks'
import cls from './index.module.scss'
import { TModalStep } from '..'

interface Props extends TClassName {
	setStep: TState<TModalStep>
}
const Action: FC<Props> = ({ className, setStep }) => {
	const hideModal = useModalState(state => state.hideModal)
	const handleCancel: MouseEventHandler = () => {
		hideModal({ slug: SALESMAN_BALANCE_PROMOCODE_MODAL })
	}
	const handleConfirmation: MouseEventHandler = () => {
		setStep('success')
	}
	return (
		<div className={cn(cls.wrapper, [className])}>
			<Typography font='Inter-SB' size={18} tag='h2'>
				Введите промокод
			</Typography>
			<Input error='Промокод недействителен' wrapperCls={cn(cls.inp_wrapper)} />
			<div className={cn(cls.actions)}>
				<Button
					size='mid'
					theme='fill'
					className={cn(cls.btn)}
					onClick={handleConfirmation}
				>
					Подтвердить
				</Button>
				<Button
					size='mid'
					theme='outline'
					className={cn(cls.btn)}
					onClick={handleCancel}
				>
					Отмена
				</Button>
			</div>
		</div>
	)
}

export { Action }
