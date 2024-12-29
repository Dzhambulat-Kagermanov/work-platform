import { FC } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import cls from './index.module.scss'
import Image from 'next/image'
import { AuthActions } from '@/components/widgets/AuthActions'
import { RegistrationForm } from '@/components/widgets/RegistrationForm'
import { Typography } from '@/components/ui'

interface Props extends TClassName {}
const RegistrationPage: FC<Props> = ({ className }) => {
	return (
		<main className={cn(cls.registration, [className])}>
			<div className={cn(cls.content)}>
				<Image
					src={'/images/shared/logo.svg'}
					alt='Логотип'
					width={32}
					height={32}
					className={cn(cls.logo)}
				/>
				<Typography
					font='Inter-SB'
					size={24}
					tag='h2'
					className={cn(cls.title)}
				>
					Регистрация
				</Typography>
				<RegistrationForm className={cn(cls.form)} />
				<AuthActions type='forRegistration' className={cn(cls.actions)} />
			</div>
		</main>
	)
}

export { RegistrationPage }
