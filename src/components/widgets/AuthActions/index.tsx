import { FC } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import { Typography } from '@/components/ui'
import Link from 'next/link'
import cls from './index.module.scss'

interface Props extends TClassName {
	type: 'forRegistration' | 'forAuth'
}
const AuthActions: FC<Props> = ({ className, type }) => {
	return (
		<div className={cn(cls.wrapper, [className])}>
			<Typography
				font='Inter-R'
				size={14}
				className={cn(cls.text, [cls.registration])}
			>
				{type === 'forAuth' ? 'Нет аккаунта?' : 'Есть аккаунт?'}
				<Link
					href={type === 'forAuth' ? '/registration' : '/auth'}
					className={cn(cls.link)}
				>
					<Typography tag='span' font='Inter-SB' size={14}>
						{' '}
						{type === 'forAuth' ? 'Зарегистрироваться?' : 'Войти'}
					</Typography>
				</Link>
			</Typography>
			{type === 'forAuth' && (
				<Link
					href={'/forgot-password'}
					className={cn(cls.text, [cls.forget_password, cls.link])}
				>
					<Typography font='Inter-SB' size={14}>
						Забыли пароль?
					</Typography>
				</Link>
			)}
			<Typography font='Inter-R' size={10} className={cn(cls.info, [cls.text])}>
				Продолжая, вы подтверждаете, что ознакомились с 
				<Link
					className={cn(cls.link)}
					href={'https://mpboost.pro/docs/privacy-policy.pdf'}
					target='_blank'
					rel='noopener noreferrer'
				>
					политикой конфиденциальности
				</Link>
				 и 
				<Link
					className={cn(cls.link)}
					href={'https://mpboost.pro/docs/policy-mpboost-pro.pdf'}
					target='_blank'
					rel='noopener noreferrer'
				>
					публичной офертой
				</Link>
			</Typography>
		</div>
	)
}

export { AuthActions }
