import { TChildren } from '@/types'
import { Footer } from '@/components/widgets/Footer'
import { Header } from '@/components/widgets/Header'
import { FC } from 'react'
import { BurgerMenu } from '@/components/widgets/BurgerMenu'

interface Props extends TChildren {}
const HeaderFooter: FC<Props> = ({ children }) => {
	return (
		<>
			<Header />
			<BurgerMenu />
			{children}
			<Footer />
		</>
	)
}

export { HeaderFooter }
