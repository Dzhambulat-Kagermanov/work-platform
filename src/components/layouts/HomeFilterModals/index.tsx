'use client'
import { FC } from 'react'
import { HomeCashbackModal } from '@/components/widgets/HomeCashbackModal'
import { HomePriceModal } from '@/components/widgets/HomePriceModal'
import { HomeSortModal } from '@/components/widgets/HomeSortModal'
import { useScreen } from '@/hooks'
import { SM_MID } from '@/constants'
import { HomeSortMobileModal } from '@/components/widgets/HomeSortMobileModal'

interface Props {}
const HomeFilterModalsLayout: FC<Props> = ({}) => {
	const screen = useScreen()

	return (
		<>
			{screen > SM_MID ? (
				<>
					<HomePriceModal />
					<HomeCashbackModal />
					<HomeSortModal />
				</>
			) : (
				<HomeSortMobileModal />
			)}
		</>
	)
}

export { HomeFilterModalsLayout }
