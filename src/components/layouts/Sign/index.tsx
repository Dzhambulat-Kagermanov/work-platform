import { FC } from 'react'
import { TChildren, TClassName } from '@/types'
import { cn } from '@/lib'
import Image from 'next/image'
import { Typography } from '@/components/ui'
import cls from './index.module.scss'
import { AuthActions } from '@/components/widgets/AuthActions'

interface Props extends TClassName, TChildren {
	logo: string
	title: string
	authActions?: 'forRegistration' | 'forAuth'
}
const SignLayout: FC<Props> = ({
	className,
	children,
	logo,
	title,
	authActions,
}) => {
	return (
		<main className={cn(cls.sign, [className])}>
			<div className={cn(cls.content)}>
				<Image
					src={logo}
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
					{title}
				</Typography>
				{children}
				{authActions && (
					<AuthActions className={cn(cls.actions)} type={authActions} />
				)}
			</div>
		</main>
	)
}

export { SignLayout }
