import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { cn } from '@/shared/lib'
import { Typography } from '@/shared/ui'
import Link from 'next/link'
import cls from './index.module.scss'

interface Props extends TClassName {}
const FooterPart: FC<Props> = ({ className }) => {
	return (
		<div className={cn(cls.wrapper, [className])}>
			<Typography font='Inter-R' size={14} tag='h6'>
				WBDiscount.pro l Все права защищены © 2024
			</Typography>
			<div className={cn(cls.content)}>
				<Link href='#'>
					<Typography font='Inter-R' size={14} tag='span'>
						Пользовательское соглашение
					</Typography>
				</Link>
				|
				<Link href='#'>
					<Typography font='Inter-R' size={14} tag='span'>
						Политика конфидициальности
					</Typography>
				</Link>
			</div>
		</div>
	)
}

export { FooterPart }
