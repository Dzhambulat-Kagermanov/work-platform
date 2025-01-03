import { TChildren } from '@/types'
import { Footer } from '@/components/widgets/shared/Footer'
import { Header } from '@/components/widgets/Buyer/Header'
import { FC } from 'react'
import { BurgerMenu } from '@/components/widgets/Buyer/BurgerMenu'

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
