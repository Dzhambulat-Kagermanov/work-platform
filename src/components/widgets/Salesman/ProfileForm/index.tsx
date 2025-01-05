'use client'
import { FC, MouseEventHandler } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import { AccountContentBlock, Button, Input } from '@/components/ui'
import { AccountExit } from '@/components/features/AccountExit'
import { useModalState, useScreen } from '@/hooks'
import { MD_BIG, PASSWORD_CHANGED_MODAL } from '@/constants'
import cls from './index.module.scss'
import { PasswordChangedModal } from '../../shared/PasswordChangedModal'

interface Props extends TClassName {}
const ProfileForm: FC<Props> = ({ className }) => {
	const width = useScreen()
	const showModal = useModalState(state => state.showModal)
	const handleSave: MouseEventHandler = () => {
		showModal({ slug: PASSWORD_CHANGED_MODAL })
	}

	return (
		<AccountContentBlock
			tag='section'
			title='Личная информация'
			className={cn(cls.wrapper, [className])}
			endChildren={
				width > MD_BIG && <AccountExit className={cn(cls.exit_btn)} />
			}
		>
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
						label='ИНН'
					/>
					<Input
						wrapperCls={cn(cls.inp_wrapper)}
						inpCls={cn(cls.inp)}
						label='Наименование юр лица'
					/>
					<Input
						wrapperCls={cn(cls.inp_wrapper)}
						inpCls={cn(cls.inp)}
						label='Название магазина на Wildberries'
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
					<Button
						theme='fill'
						className={cn(cls.btn_save)}
						onClick={handleSave}
					>
						Сохранить
					</Button>
				</div>
			</form>
			<PasswordChangedModal className={cn(cls.password_changed)} />
		</AccountContentBlock>
	)
}

export { ProfileForm }
