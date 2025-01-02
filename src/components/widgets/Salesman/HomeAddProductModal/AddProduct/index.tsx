'use client'
import { FC, MouseEventHandler } from 'react'
import { TClassName, TState } from '@/types'
import { cn } from '@/lib'
import Image from 'next/image'
import { Button, Input, Typography } from '@/components/ui'
import { TModalStep } from '..'
import cls from './index.module.scss'
import { useModalState } from '@/hooks'
import { SALESMAN_ADD_PRODUCT_MODAL } from '@/constants'

interface Props extends TClassName {
	setStep: TState<TModalStep>
}
const AddProduct: FC<Props> = ({ className, setStep }) => {
	const hideModal = useModalState(state => state.hideModal)
	const handleCancelClick: MouseEventHandler = () => {
		hideModal({ slug: SALESMAN_ADD_PRODUCT_MODAL })
	}
	const handleConfirmClick: MouseEventHandler = () => {
		setStep('addProductConfirmation')
	}

	return (
		<div className={cn(cls.wrapper, [className])}>
			<Image
				src={'/images/salesman/home/add-product-cube.svg'}
				alt='Добавить товар'
				width={48}
				height={48}
			/>
			<Typography font='Inter-SB' size={18} tag='h2'>
				Добавление товара
			</Typography>
			<Typography font='Inter-M' size={14} tag='h3'>
				Введите артикул товара с Вайлдберис
			</Typography>
			<Input
				label='Артикул:'
				wrapperCls={cn(cls.inp_wrapper)}
				labelCls={cn(cls.inp_label)}
			/>
			<div className={cn(cls.actions)}>
				<Button
					size='mid'
					onClick={handleCancelClick}
					theme='outline'
					className={cn(cls.btn, [cls.cancel_btn])}
				>
					Отмена
				</Button>
				<Button
					size='mid'
					onClick={handleConfirmClick}
					theme='fill'
					className={cn(cls.btn, [cls.cancel_btn])}
				>
					Подтвердить
				</Button>
			</div>
		</div>
	)
}

export { AddProduct }
