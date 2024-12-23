'use client'
import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { cn } from '@/shared/lib'
import { Typography } from '@/shared/ui'
import Link from 'next/link'
import { useScreen } from '@/shared/hooks'
import { SM_BIG, XS_BIG } from '@/shared/constants'
import { Social } from '../Social'
import cls from './index.module.scss'

interface Props extends TClassName {}
const FooterPart: FC<Props> = ({ className }) => {
	const width = useScreen()

	return (
		<div className={cn(cls.wrapper, [className])}>
			{width > SM_BIG && (
				<Typography font='Inter-R' size={14} tag='h6'>
					WBDiscount.pro l Все права защищены © 2024
				</Typography>
			)}
			{width <= XS_BIG && (
				<>
					<Typography font='Inter-R' size={14} tag='h5'>
						ИП Клягин Владимир Александрович ИНН 632100726934
					</Typography>
					<Social className={cn(cls.social)} />
				</>
			)}
			<div className={cn(cls.content)}>
				<Link href='#' className={cn(cls.agreement)}>
					<Typography font='Inter-R' size={14} tag='span'>
						Пользовательское соглашение
					</Typography>
				</Link>
				{width > XS_BIG && (
					<>
						|
						<Link href='#' className={cn(cls.policy)}>
							<Typography font='Inter-R' size={14} tag='span'>
								Политика конфидициальности
							</Typography>
						</Link>
					</>
				)}
			</div>
		</div>
	)
}

export { FooterPart }
