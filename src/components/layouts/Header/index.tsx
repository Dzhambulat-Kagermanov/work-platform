import { TChildren } from '@/types'
import { Header } from '@/components/widgets/Header'
import { FC } from 'react'

interface Props extends TChildren {}
const HeaderLayout: FC<Props> = ({ children }) => {
	return (
		<>
			<Header />
			{children}
		</>
	)
}

export { HeaderLayout }
