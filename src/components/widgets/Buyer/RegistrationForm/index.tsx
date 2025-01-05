'use client'
import { FC, FormEvent } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import { Input, InputMaskSwitcher } from '@/components/ui'
import { RegistrationFormSubmit } from '@/components/features/RegistrationFormSubmit'
import { PHONE_MASKS } from '@/constants'
import cls from './index.module.scss'

interface Props extends TClassName {}
const RegistrationForm: FC<Props> = ({ className }) => {
	const handleSubmit = (e: FormEvent) => {
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
				label='Введите ваше имя'
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
			<RegistrationFormSubmit className={cn(cls.submit_btn)} type='submit' />
		</form>
	)
}

export { RegistrationForm }
