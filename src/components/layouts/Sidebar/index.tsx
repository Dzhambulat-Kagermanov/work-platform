import { FC } from 'react'
import { TChildren } from '@/types'
import { Sidebar } from '@/components/widgets/Salesman/Sidebar'
import { cn } from '@/lib'
import cls from './index.module.scss'

interface Props extends TChildren {}
const SidebarLayout: FC<Props> = ({ children }) => {
	return (
		<div className={cn(cls.wrapper)}>
			<Sidebar />
			<main className={cn(cls.main)}>{children}</main>
		</div>
	)
}

export { SidebarLayout }
