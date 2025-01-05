'use client'
import { FC, FormEventHandler } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import { RegistrationFormSubmit } from '@/components/features/RegistrationFormSubmit'
import { InputMaskSwitcher, Input, Timer, Typography } from '@/components/ui'
import { PHONE_MASKS } from '@/constants'
import cls from './index.module.scss'
import { useRouter } from 'next/navigation'

interface Props extends TClassName {}
const RegistrationForm: FC<Props> = ({ className }) => {
	const routerSTUB = useRouter()
	const handleSubmit: FormEventHandler = e => {
		e.preventDefault()
	}
	return (
		<form className={cn(cls.wrapper, [className])} onSubmit={handleSubmit}>
			<InputMaskSwitcher
				masks={PHONE_MASKS}
				errorIcon
				wrapperCls={cn(cls.inp_wrapper, [cls.phone])}
				label='Номер телефона'
				lazy={false}
				placeholderChar='_'
				onComplete={value => {
					console.log(value)
				}}
			/>

			<Input
				errorIcon
				wrapperCls={cn(cls.inp_wrapper, [cls.password])}
				label='Введите 4-значный код из СМС'
				error={
					<>
						Неверный код.
						<Typography
							font='Inter-R'
							size={14}
							tag='span'
							className={cn(cls.timer)}
						>
							Запросить новый код можно через
							<Timer second={36} format={undefined} /> сек.
						</Typography>
					</>
				}
			/>
			<Input
				errorIcon
				wrapperCls={cn(cls.inp_wrapper, [cls.password])}
				label='Введите название вашего магазина'
			/>
			<Input
				errorIcon
				wrapperCls={cn(cls.inp_wrapper, [cls.password])}
				label='Придумайте пароль'
			/>
			<Input
				errorIcon
				wrapperCls={cn(cls.inp_wrapper, [cls.password])}
				label='Повторите пароль'
			/>
			<RegistrationFormSubmit
				className={cn(cls.submit_btn)}
				onClick={() => {
					routerSTUB.push('/salesman')
				}}
				type='submit'
			/>
		</form>
	)
}

export { RegistrationForm }
