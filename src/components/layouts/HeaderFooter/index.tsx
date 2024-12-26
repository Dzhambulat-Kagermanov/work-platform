import { TChildren } from '@/types'
import { Footer } from '@/components/widgets/Footer'
import { Header } from '@/components/widgets/Header'
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
