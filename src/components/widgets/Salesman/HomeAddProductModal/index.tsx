'use client'
import { FC, useState } from 'react'
import { ModalBase } from '@/components/ui'
import { SALESMAN_ADD_PRODUCT_MODAL } from '@/constants'
import { cn } from '@/lib'
import { TClassName } from '@/types'
import { AddProduct } from './AddProduct'
import { FailAddProduct } from './FailAddProduct'
import cls from './index.module.scss'
import { AddShop } from './AddShop'
import { FailAddShop } from './FailAddShop'
import { AddProductConfirmation } from './AddProductConfirmation'

export type TModalStep =
	| 'failAddShop'
	| 'failAddProduct'
	| 'addShop'
	| 'addProduct'
	| 'addProductConfirmation'
	| null

interface Props extends TClassName {}
const HomeAddProductModal: FC<Props> = ({ className }) => {
	const [step, setStep] = useState<TModalStep>('addProduct')

	return (
		<ModalBase
			onClose={() => {
				setStep(null)
			}}
			slug={SALESMAN_ADD_PRODUCT_MODAL}
			className={cn(cls.wrapper, [className])}
		>
			<div className={cn(cls.content)}>
				{step === 'addProduct' || step === null ? (
					<AddProduct className={cn(cls.add_product)} setStep={setStep} />
				) : step === 'failAddProduct' ? (
					<FailAddProduct
						className={cn(cls.fail_add_product)}
						setStep={setStep}
					/>
				) : step === 'addShop' ? (
					<AddShop className={cn(cls.add_shop)} setStep={setStep} />
				) : step === 'failAddShop' ? (
					<FailAddShop className={cn(cls.fail_add_shop)} setStep={setStep} />
				) : (
					<AddProductConfirmation
						className={cn(cls.add_product_confirm)}
						setStep={setStep}
					/>
				)}
			</div>
		</ModalBase>
	)
}

export { HomeAddProductModal }
