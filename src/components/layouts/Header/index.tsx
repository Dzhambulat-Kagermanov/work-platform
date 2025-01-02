import { TChildren } from '@/types'
import { Header } from '@/components/widgets/Buyer/Header'
import { FC } from 'react'
import { BurgerMenu } from '@/components/widgets/shared/BurgerMenu'

interface Props extends TChildren {}
const HeaderLayout: FC<Props> = ({ children }) => {
	return (
		<>
			<Header />
			<BurgerMenu />
			{children}
		</>
	)
}

export { HeaderLayout }
