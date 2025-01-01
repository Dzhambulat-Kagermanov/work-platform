import { FC } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import Link from 'next/link'
import Image from 'next/image'
import cls from './index.module.scss'

interface Props extends TClassName {}
const Social: FC<Props> = ({ className }) => {
	return (
		<nav className={cn(cls.wrapper, [className])}>
			<Link href={'#'}>
				<Image
					src='/images/shared/social/telegram.svg'
					alt='Telegram'
					width={19}
					height={19}
				/>
			</Link>
			<Link href={'#'}>
				<Image
					src='/images/shared/social/instagram.svg'
					alt='Telegram'
					width={19}
					height={19}
				/>
			</Link>
			<Link href={'#'}>
				<Image
					src='/images/shared/social/vk.svg'
					alt='Telegram'
					width={19}
					height={19}
				/>
			</Link>
		</nav>
	)
}

export { Social }
