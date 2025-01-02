'use client'
import { FC, MouseEventHandler } from 'react'
import { TClassName, TState } from '@/types'
import { TModalStep } from '..'
import { cn } from '@/lib'
import { Typography, Button } from '@/components/ui'
import Image from 'next/image'
import cls from './index.module.scss'

interface Props extends TClassName {
	setStep: TState<TModalStep>
}
const AddProductConfirmation: FC<Props> = ({ setStep, className }) => {
	const handleBackClick: MouseEventHandler = () => {
		setStep('addProduct')
	}
	const handleNextClick: MouseEventHandler = () => {
		setStep('failAddProduct')
	}

	return (
		<div className={cn(cls.wrapper, [className])}>
			<Typography font='Inter-SB' size={18} tag='h2'>
				Добавление товара
			</Typography>
			<Typography font='Inter-M' size={14} tag='h3'>
				Это ваш товар?
			</Typography>
			<div className={cn(cls.product)}>
				<Image
					src={'/images/stub/product-stub.png'}
					alt='Товар'
					width={40}
					height={40}
				/>
				<div className={cn(cls.info)}>
					<Typography font='Inter-SB' size={14} tag='h3'>
						Зарядка для iphone 20W typ-с Гарнитура
					</Typography>
					<Typography font='Inter-R' size={14} tag='h4'>
						Продавец товаров 1
					</Typography>
				</div>
			</div>
			<div className={cn(cls.actions)}>
				<Button
					size='mid'
					onClick={handleBackClick}
					theme='outline'
					className={cn(cls.btn, [cls.cancel_btn])}
				>
					Назад
				</Button>
				<Button
					size='mid'
					onClick={handleNextClick}
					theme='fill'
					className={cn(cls.btn, [cls.cancel_btn])}
				>
					Далее
				</Button>
			</div>
		</div>
	)
}

export { AddProductConfirmation }
