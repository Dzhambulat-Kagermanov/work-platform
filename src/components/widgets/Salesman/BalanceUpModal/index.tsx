'use client'
import { FC, useState } from 'react'
import { TClassName } from '@/types'
import { ModalBase } from '@/components/ui'
import { SALESMAN_BALANCE_UP_MODAL } from '@/constants'
import { cn } from '@/lib'
import { Action } from './Action'
import { Success } from './Success'
import cls from './index.module.scss'

export type TModalStep = 'action' | 'success'

interface Props extends TClassName {}
const BalanceUpModal: FC<Props> = ({ className }) => {
	const [step, setStep] = useState<TModalStep>('action')

	return (
		<ModalBase
			slug={SALESMAN_BALANCE_UP_MODAL}
			className={cn(cls.wrapper, [className])}
		>
			<div className={cn(cls.content)}>
				{step === 'action' ? (
					<Action className={cn(cls.action)} setStep={setStep} />
				) : (
					<Success className={cn(cls.success)} />
				)}
			</div>
		</ModalBase>
	)
}

export { BalanceUpModal }
