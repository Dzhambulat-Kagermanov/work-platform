'use client'
import { ChangeEventHandler, FC, MouseEventHandler, useState } from 'react'
import { TClassName, TState } from '@/types'
import { Typography, Button, Input } from '@/components/ui'
import { cn } from '@/lib'
import { useModalState } from '@/hooks'
import { SALESMAN_RANSOMS_USER_UPLOAD_FILE_MODAL } from '@/constants'
import { TModalStep } from '..'
import cls from './index.module.scss'

interface Props extends TClassName {
	setStep: TState<TModalStep>
}
const RejectContent: FC<Props> = ({ className, setStep }) => {
	const [comment, setComment] = useState<string>('')
	const hideModal = useModalState(state => state.hideModal)
	const handleConfirmation: MouseEventHandler = () => {
		hideModal({ slug: SALESMAN_RANSOMS_USER_UPLOAD_FILE_MODAL })
	}
	const handleBack: MouseEventHandler = () => {
		setStep('action')
	}
	const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
		setComment(e.currentTarget.value)
	}

	return (
		<div className={cn(cls.wrapper, [className])}>
			<Typography font='Inter-SB' size={18} tag='h2'>
				Загруженный файл 1
			</Typography>
			<Typography font='Inter-R' size={14} tag='h3'>
				Если это соответствует вашим условиям, нажмите “Принять”. Если нет -
				нажмите “Отклонить”
			</Typography>
			<Input
				wrapperCls={cn(cls.inp_wrapper)}
				labelCls={cn(cls.inp_label)}
				label='Комментарий'
				value={comment}
				onChange={handleChange}
			/>
			<div className={cn(cls.btns)}>
				<Button
					theme='outline'
					size='mid'
					className={cn(cls.btn)}
					onClick={handleBack}
				>
					Назад
				</Button>
				<Button
					disabled={comment.length < 5}
					theme='fill'
					size='mid'
					className={cn(cls.btn)}
					onClick={handleConfirmation}
				>
					Подтвердить
				</Button>
			</div>
		</div>
	)
}

export { RejectContent }
