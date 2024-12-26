import { TChildren } from '@/types'
import { HeaderLayout } from '@/components/layouts/Header'
import { FC } from 'react'

interface Props extends TChildren {}
const Layout: FC<Props> = ({ children }) => {
	return <HeaderLayout>{children}</HeaderLayout>
}

export default Layout
