import { FC } from 'react'
import { TClassName } from '@/types'
import { SignLayout } from '@/components/layouts/Sign'
import { cn } from '@/lib'
import { ForgotPasswordForm } from '@/components/widgets/Salesman/ForgotPasswordForm'
import { SalesmanAuthBackgroundLayout } from '@/components/layouts/SalesmanAuthBackground'
import { AuthActions } from '@/components/widgets/Buyer/AuthActions'
import cls from './index.module.scss'

interface Props extends TClassName {}
const ForgotPasswordPage: FC<Props> = ({ className }) => {
	return (
		<SalesmanAuthBackgroundLayout>
			<SignLayout
				logo='/images/shared/logo-v2.svg'
				title='Восстановление пароля'
				className={cn(cls.main, [className])}
				paddingStubCls={cn(cls.padding_stub)}
			>
				<ForgotPasswordForm className={cn(cls.form)} />
				<AuthActions type='forSalesmanAuth' className={cn(cls.actions)} />
			</SignLayout>
		</SalesmanAuthBackgroundLayout>
	)
}

export { ForgotPasswordPage }
