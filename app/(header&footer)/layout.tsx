import { FC } from 'react'
import { TChildren } from '@/shared/types'
import { HeaderFooter } from '@/app/layouts/HeaderFooter'

interface Props extends TChildren {}
const Layout: FC<Props> = ({ children }) => {
	return <HeaderFooter>{children}</HeaderFooter>
}

export default Layout
