import { FC } from 'react'
import { TClassName } from '@/types'
import { SignLayout } from '@/components/layouts/Sign'
import { cn } from '@/lib'
import cls from './index.module.scss'
import { SalesmanRegistrationForm } from '@/components/widgets/Salesman/SalesmanRegistrationForm'

interface Props extends TClassName {}
const RegistrationPage: FC<Props> = ({ className }) => {
	return (
		<SignLayout
			logo='/images/shared/logo-v2.svg'
			title='Регистрация продавца'
			authActions='forSalesmanRegistration'
			className={cn(cls.main, [className])}
		>
			<SalesmanRegistrationForm className={cn(cls.form)} />
		</SignLayout>
	)
}

export { RegistrationPage }
