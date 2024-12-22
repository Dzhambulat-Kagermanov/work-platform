'use client'
import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { cn } from '@/shared/lib'
import { Container } from '@/shared/ui'
import Image from 'next/image'
import cls from './index.module.scss'
import { useScreen } from '@/shared/hooks'
import { SM_BIG } from '@/shared/constants'

interface Props extends TClassName {}
const HomePromo: FC<Props> = ({ className }) => {
	const width = useScreen()

	return (
		<Container tag='section' className={cn(cls.container, [className])}>
			{width > SM_BIG ? (
				<Image
					src='/images/home/promo/background-lg.png'
					alt='Акция'
					width={1350}
					height={170}
				/>
			) : (
				<Image
					src='/images/home/promo/background-md.png'
					alt='Акция'
					width={600}
					height={400}
				/>
			)}
		</Container>
	)
}

export { HomePromo }
