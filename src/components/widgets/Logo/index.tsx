import { FC } from 'react'
import { cn } from '@/lib'
import { TClassName } from '@/types'
import Image from 'next/image'
import { Typography } from '@/components/ui'
import cls from './index.module.scss'
import Link from 'next/link'

interface Props extends TClassName {}
const Logo: FC<Props> = ({ className }) => {
	return (
		<Link href={'/'} className={cn(cls.wrapper, [className])}>
			<Image
				src={'/images/shared/logo.svg'}
				alt='Логотип'
				width={32}
				height={32}
			/>
			<Typography font='PlusJakartaSans-EB' size={18} tag='h2'>
				WBdiscount
			</Typography>
		</Link>
	)
}

export { Logo }
