import { FC } from 'react'
import cls from './index.module.scss'
import { TClassName } from '@/types'
import { SignLayout } from '@/components/layouts/Sign'
import { cn } from '@/lib'
import { ForgotPasswordForm } from '@/components/widgets/Salesman/ForgotPasswordForm'

interface Props extends TClassName {}
const ForgotPasswordPage: FC<Props> = ({ className }) => {
	return (
		<SignLayout
			logo='/images/shared/logo-v2.svg'
			title='Восстановление пароля'
			className={cn(cls.main, [className])}
		>
			<ForgotPasswordForm className={cn(cls.form)} />
		</SignLayout>
	)
}

export { ForgotPasswordPage }
