'use client'
import { FC } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import { Container } from '@/components/ui'
import { Avatar } from './Avatar'
import { Info } from './Info'
import { useScreen } from '@/hooks'
import { XS_BIG } from '@/constants'
import { InfoMobileBackground, InfoMobileContent } from './InfoMobile'
import cls from './index.module.scss'

interface Props extends TClassName {}
const AccountHead: FC<Props> = ({ className }) => {
	const width = useScreen()

	return (
		<section className={cn(cls.wrapper)}>
			{width <= XS_BIG && (
				<InfoMobileBackground
					className={cn(cls.info_mobile_backg)}
					id={124321}
					registerDate='19.08.2024'
				/>
			)}
			<Container className={cn(cls.container, [className])}>
				<Avatar name='Анастасия К.' className={cn(cls.avatar)} />
				{width > XS_BIG && (
					<Info
						className={cn(cls.info)}
						id={124321}
						name='Анастасия К.'
						rating={4.7}
						registerDate='19.08.2024'
					/>
				)}
				{width <= XS_BIG && (
					<InfoMobileContent
						className={cn(cls.info_mobile_content)}
						name='Анастасия К.'
						rating={4.7}
					/>
				)}
			</Container>
		</section>
	)
}

export { AccountHead }
