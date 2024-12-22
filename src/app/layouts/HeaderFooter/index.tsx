import { TChildren } from '@/shared/types'
import { Footer } from '@/widgets/Footer'
import { Header } from '@/widgets/Header'
import { FC } from 'react'

interface Props extends TChildren {}
const HeaderFooter: FC<Props> = ({ children }) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	)
}

export { HeaderFooter }
