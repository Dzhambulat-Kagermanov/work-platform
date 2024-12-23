import { TChildren } from '@/shared/types'
import { Header } from '@/widgets/Header'
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
