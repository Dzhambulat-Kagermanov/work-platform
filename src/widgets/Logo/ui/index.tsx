import { FC } from 'react'
import { cn } from '@/shared/lib'
import { TClassName } from '@/shared/types'
import Image from 'next/image'
import { Typography } from '@/shared/ui'
import cls from './index.module.scss'

interface Props extends TClassName {}
const Logo: FC<Props> = ({ className }) => {
	return (
		<div className={cn(cls.wrapper, [className])}>
			<Image
				src={'/images/shared/logo.svg'}
				alt='Логотип'
				width={32}
				height={32}
			/>
			<Typography font='PlusJakartaSans-EB' size={18} tag='h2'>
				WBdiscount
			</Typography>
		</div>
	)
}

export { Logo }
