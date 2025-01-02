import { FC } from 'react'
import { cn } from '@/lib'
import { TClassName } from '@/types'
import Image from 'next/image'
import { Typography } from '@/components/ui'
import Link from 'next/link'
import cls from './index.module.scss'

interface Props extends TClassName {
	hasNotLink?: true
	link?: string
}
const Logo: FC<Props> = ({ className, hasNotLink, link }) => {
	return (
		<Link
			href={link ? link : !hasNotLink ? '/' : '#'}
			className={cn(cls.wrapper, [className])}
		>
			<Image
				src={'/images/shared/logo.svg'}
				alt='Логотип'
				width={32}
				height={32}
			/>
			<Typography font='Inter-B' size={18} tag='h2'>
				WBdiscount
			</Typography>
		</Link>
	)
}

export { Logo }
