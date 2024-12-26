import { FC } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import { Button, Input, Typography } from '@/components/ui'
import cls from './index.module.scss'

interface Props extends TClassName {}
const AccountForm: FC<Props> = ({ className }) => {
	return (
		<section className={cn(cls.wrapper, [className])}>
			<Typography font='Inter-SB' size={14} tag='h2'>
				Личная информация
			</Typography>
			<form className={cn(cls.form)}>
				<div className={cn(cls.content)}>
					<Input
						wrapperCls={cn(cls.inp_wrapper)}
						inpCls={cn(cls.inp)}
						label='Имя пользователя'
					/>
					<Input
						wrapperCls={cn(cls.inp_wrapper)}
						inpCls={cn(cls.inp)}
						label='Телефон'
					/>
					<Input
						wrapperCls={cn(cls.inp_wrapper)}
						inpCls={cn(cls.inp)}
						label='Почта'
					/>
					<Input
						wrapperCls={cn(cls.inp_wrapper)}
						inpCls={cn(cls.inp)}
						label='Новый пароль'
					/>
					<Input
						wrapperCls={cn(cls.inp_wrapper)}
						inpCls={cn(cls.inp)}
						label='Новый пароль еще раз'
					/>
				</div>
				<div className={cn(cls.btn_wrapper)}>
					<Button theme='fill' className={cn(cls.btn_save)} disabled>
						Сохранить
					</Button>
				</div>
			</form>
		</section>
	)
}

export { AccountForm }
