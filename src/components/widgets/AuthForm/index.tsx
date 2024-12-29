'use client'
import { FC, FormEvent } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import { Input } from '@/components/ui'
import { AuthFormSubmit } from '@/components/features/AuthFormSubmit'
import cls from './index.module.scss'

interface Props extends TClassName {}
const AuthForm: FC<Props> = ({ className }) => {
	const handleSubmit = (e: FormEvent) => {
		e.preventDefault()
	}

	return (
		<form className={cn(cls.wrapper, [className])} onSubmit={handleSubmit}>
			<Input
				wrapperCls={cn(cls.inp_wrapper, [cls.phone])}
				label='Номер телефона'
				placeholder='+7 (999) 999 99 99'
			/>
			<Input wrapperCls={cn(cls.inp_wrapper, [cls.password])} label='Пароль' />
			<AuthFormSubmit className={cn(cls.submit_btn)} type='submit' />
		</form>
	)
}

export { AuthForm }
