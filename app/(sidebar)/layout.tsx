import { FC } from 'react'
import { SidebarLayout } from '@/components/layouts/Sidebar'
import { TChildren } from '@/types'

interface Props extends TChildren {}
const Sidebar: FC<Props> = ({ children }) => {
	return <SidebarLayout>{children}</SidebarLayout>
}

export default Sidebar
