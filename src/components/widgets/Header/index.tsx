'use client'
import { FC } from 'react'
import { TModuleClassName } from '@/types'
import { cn } from '@/lib'
import { Container, Typography } from '@/components/ui'
import { Content } from './Content'
import Link from 'next/link'
import cls from './index.module.scss'
import { useScreen } from '@/hooks'
import { SM_BIG } from '@/constants'

interface Props extends TModuleClassName {}
const Header: FC<Props> = ({ className, wrapperClassName }) => {
	const width = useScreen()

	return (
		<header className={cn(cls.wrapper, [wrapperClassName])}>
			<Container className={cn(cls.container, [className])}>
				{width > SM_BIG && (
					<Link href='#'>
						<Typography
							font='Inter-M'
							size={12}
							className={cn(cls.entrance_link)}
						>
							Вход для продавцов
						</Typography>
					</Link>
				)}
				<Content className={cn(cls.content)} />
			</Container>
		</header>
	)
}

export { Header }
