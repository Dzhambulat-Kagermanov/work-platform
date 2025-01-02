'use client'
import { FC, MouseEventHandler } from 'react'
import { TClassName, TState } from '@/types'
import { TModalStep } from '..'
import { Typography, Input, Button } from '@/components/ui'
import { cn } from '@/lib'
import Image from 'next/image'
import cls from './index.module.scss'
import { SALESMAN_ADD_PRODUCT_MODAL } from '@/constants'
import { useModalState } from '@/hooks'

interface Props extends TClassName {
	setStep: TState<TModalStep>
}
const AddShop: FC<Props> = ({ className, setStep }) => {
	const hideModal = useModalState(state => state.hideModal)
	const handleCancelClick: MouseEventHandler = () => {
		hideModal({ slug: SALESMAN_ADD_PRODUCT_MODAL })
	}
	const handleConfirmClick: MouseEventHandler = () => {
		setStep('failAddShop')
	}
	return (
		<div className={cn(cls.wrapper, [className])}>
			<Image
				src='/images/salesman/home/add-product-cart.svg'
				alt='Не получилось'
				width={48}
				height={48}
			/>
			<Typography font='Inter-SB' size={18} tag='h2'>
				Добавление магазина
			</Typography>
			<Typography font='Inter-M' size={14} tag='h3'>
				Этот товар находится в магазине продавца “HASYAN”
				<br />
				<br />
				Подтвердите добавление магазина в ваш профиль на Wbdiscount. <br />
				<br />
				<span>(Этот шаг делается один раз для новой учетной записи)</span>
			</Typography>
			<div className={cn(cls.inps)}>
				<Input
					label='ИНН'
					wrapperCls={cn(cls.inp_wrapper)}
					labelCls={cn(cls.inp_label)}
				/>
				<Input
					label='Наименование юр лица'
					wrapperCls={cn(cls.inp_wrapper)}
					labelCls={cn(cls.inp_label)}
				/>
				<Input
					label='Название магазина на Wildberries'
					wrapperCls={cn(cls.inp_wrapper)}
					labelCls={cn(cls.inp_label)}
				/>
			</div>
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

export { AddShop }
