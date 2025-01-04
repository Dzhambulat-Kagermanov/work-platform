'use client'
import { FC, MouseEventHandler } from 'react'
import { TClassName, TState } from '@/types'
import { cn } from '@/lib'
import { Button, Typography } from '@/components/ui'
import { TModalStep } from '..'
import cls from './index.module.scss'

interface Props extends TClassName {
	setStep: TState<TModalStep>
}
const SuccessArchive: FC<Props> = ({ className, setStep }) => {
	const handleClick: MouseEventHandler = () => {
		setStep('fail-archive')
	}

	return (
		<div className={cn(cls.wrapper, [className])}>
			<Typography font='Inter-SB' size={18} tag='h2'>
				Объявление архивировано
			</Typography>
			<Typography font='Inter-R' size={14} tag='h4'>
				Объявление отправлено в архив. На основной баланс возвращено: 500 ₽.
			</Typography>
			<Button
				wFull
				size='mid'
				theme='fill'
				className={cn(cls.btn)}
				onClick={handleClick}
			>
				Понятно
			</Button>
		</div>
	)
}

export { SuccessArchive }
