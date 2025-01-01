'use client'
import { FC, FormEvent } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import { Input, MaskInput } from '@/components/ui'
import { AuthFormSubmit } from '@/components/features/AuthFormSubmit'
import { PHONE_MASKS } from '@/constants'
import cls from './index.module.scss'

interface Props extends TClassName {}
const AuthForm: FC<Props> = ({ className }) => {
	const handleSubmit = (e: FormEvent) => {
		e.preventDefault()
	}

	return (
		<form className={cn(cls.wrapper, [className])} onSubmit={handleSubmit}>
			<MaskInput
				errorIcon
				wrapperCls={cn(cls.inp_wrapper, [cls.phone])}
				label='Номер телефона'
				mask={PHONE_MASKS.ru}
				lazy={false}
				placeholderChar='_'
				onComplete={value => {
					console.log(value)
				}}
			/>
			<Input
				errorIcon
				wrapperCls={cn(cls.inp_wrapper, [cls.password])}
				label='Пароль'
			/>
			<AuthFormSubmit className={cn(cls.submit_btn)} type='submit' />
		</form>
	)
}

export { AuthForm }
