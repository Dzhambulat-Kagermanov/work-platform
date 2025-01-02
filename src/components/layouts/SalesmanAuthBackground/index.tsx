import { FC } from 'react'
import { SignDesktopBackground } from '@/components/widgets/Salesman/SignDesktopBackground'
import { TChildren } from '@/types'
import { cn } from '@/lib'
import cls from './index.module.scss'
import { Logo } from '@/components/widgets/shared/Logo'

interface Props extends TChildren {}
const SalesmanAuthBackgroundLayout: FC<Props> = ({ children }) => {
	return (
		<div className={cn(cls.wrapper)}>
			<div className={cn(cls.content)}>
				<Logo className={cn(cls.logo)} />
				{children}
			</div>
			<SignDesktopBackground />
		</div>
	)
}

export { SalesmanAuthBackgroundLayout }
