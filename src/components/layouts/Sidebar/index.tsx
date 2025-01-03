'use client'
import { FC } from 'react'
import { TChildren } from '@/types'
import { Sidebar } from '@/components/widgets/Salesman/Sidebar'
import { cn } from '@/lib'
import { useScreen } from '@/hooks'
import { SM_BIG } from '@/constants'
import { MobileHeader } from '@/components/widgets/Salesman/MobileHeader'
import { BurgerMenu } from '@/components/widgets/Salesman/BurgerMenu'
import cls from './index.module.scss'

interface Props extends TChildren {}
const SidebarLayout: FC<Props> = ({ children }) => {
	const width = useScreen()
	return (
		<div className={cn(cls.wrapper)}>
			{width > SM_BIG && <Sidebar />}
			<main className={cn(cls.main)}>
				{width <= SM_BIG && (
					<>
						<BurgerMenu className={cn(cls.menu)} />
						<MobileHeader className={cn(cls.header)} />
					</>
				)}
				<div className={cn(cls.content)}>{children}</div>
			</main>
		</div>
	)
}

export { SidebarLayout }
