'use client'
import { FC } from 'react'
import { TModuleClassName } from '@/types'
import { cn } from '@/lib'
import { Container, Typography } from '@/components/ui'
import { Content } from './Content'
import Link from 'next/link'
import { useScreen } from '@/hooks'
import { SM_BIG } from '@/constants'
import { usePathname } from 'next/navigation'
import { pathValidating } from '@/lib'
import cls from './index.module.scss'

interface Props extends TModuleClassName {}
const Header: FC<Props> = ({ className, wrapperClassName }) => {
	const width = useScreen()
	const path = usePathname()

	const isSalesmanPages = pathValidating(path, '/salesman/...')

	return (
		<header className={cn(cls.wrapper, [wrapperClassName])}>
			<Container className={cn(cls.container, [className])}>
				{width > SM_BIG && (
					<Link href={isSalesmanPages ? '/buyer/auth' : '/salesman/auth'}>
						<Typography
							font='Inter-M'
							size={12}
							className={cn(cls.entrance_link)}
						>
							{isSalesmanPages ? 'Вход для покупателей' : 'Вход для продавцов'}
						</Typography>
					</Link>
				)}
				<Content className={cn(cls.content)} />
			</Container>
		</header>
	)
}

export { Header }
