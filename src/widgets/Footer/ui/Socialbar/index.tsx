'use client'
import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { cn } from '@/shared/lib'
import { Typography } from '@/shared/ui'
import { Logo } from '@/widgets/Logo'
import { Social } from '../Social'
import cls from './index.module.scss'
import { useScreen } from '@/shared/hooks'
import { XS_BIG } from '@/shared/constants'

interface Props extends TClassName {}
const Socialbar: FC<Props> = ({ className }) => {
	const width = useScreen()

	return (
		<div className={cn(cls.wrapper, [className])}>
			<Logo className={cn(cls.logo)} />
			{width > XS_BIG && (
				<>
					<Typography font='Inter-R' size={14} tag='h5'>
						ИП Клягин Владимир Александрович ИНН 632100726934
					</Typography>
					<Social className={cn(cls.social)} />
				</>
			)}
		</div>
	)
}

export { Socialbar }
