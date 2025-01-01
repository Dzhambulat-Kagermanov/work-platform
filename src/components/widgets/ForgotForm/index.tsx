'use client'
import { FC } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import { Button, Input, MaskInput, Timer, Typography } from '@/components/ui'
import { PHONE_MASKS } from '@/constants'
import cls from './index.module.scss'

interface Props extends TClassName {}
const ForgotForm: FC<Props> = ({ className }) => {
	return (
		<form className={cn(cls.wrapper, [className])}>
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
				label='Введите 4-значный код из СМС'
				error={
					<>
						Неверный код.{' '}
						<Typography
							font='Inter-R'
							size={14}
							tag='span'
							className={cn(cls.timer)}
						>
							Запросить новый код можно через{' '}
							<Timer second={36} format={undefined} /> сек.
						</Typography>
					</>
				}
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
			<Button theme='fill' size='mid' className={cn(cls.next_btn)} wFull>
				Далее
			</Button>
		</form>
	)
}

export { ForgotForm }
