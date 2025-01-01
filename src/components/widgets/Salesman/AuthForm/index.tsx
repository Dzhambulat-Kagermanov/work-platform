'use client'
import { FC, FormEventHandler } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import { AuthFormSubmit } from '@/components/features/AuthFormSubmit'
import { InputMaskSwitcher, Input } from '@/components/ui'
import { PHONE_MASKS } from '@/constants'
import cls from './index.module.scss'

interface Props extends TClassName {}
const AuthForm: FC<Props> = ({ className }) => {
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
				label='Пароль'
			/>
			<AuthFormSubmit className={cn(cls.submit_btn)} type='submit' />
		</form>
	)
}

export { AuthForm }
