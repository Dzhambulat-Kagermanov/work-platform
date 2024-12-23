import { TChildren } from '@/shared/types'
import { HeaderLayout } from '@/app/layouts/Header'
import { FC } from 'react'

interface Props extends TChildren {}
const Layout: FC<Props> = ({ children }) => {
	return <HeaderLayout>{children}</HeaderLayout>
}

export default Layout
