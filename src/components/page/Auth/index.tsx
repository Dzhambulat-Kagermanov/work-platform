import { FC } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import Image from 'next/image'
import { Typography } from '@/components/ui'
import { AuthForm } from '@/components/widgets/AuthForm'
import { AuthActions } from '@/components/widgets/AuthActions'
import cls from './index.module.scss'

interface Props extends TClassName {}
const AuthPage: FC<Props> = ({ className }) => {
	return (
		<main className={cn(cls.auth, [className])}>
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
					Авторизация покупателя
				</Typography>
				<AuthForm className={cn(cls.form)} />
				<AuthActions type='forAuth' className={cn(cls.actions)} />
			</div>
		</main>
	)
}

export { AuthPage }
