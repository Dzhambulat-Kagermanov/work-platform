'use client'
import { FC } from 'react'
import { TChildren } from '@/types'
import { Sidebar } from '@/components/widgets/Salesman/Sidebar'
import { cn, pathValidating } from '@/lib'
import { useScreen } from '@/hooks'
import { SM_BIG } from '@/constants'
import { MobileHeader } from '@/components/widgets/Salesman/MobileHeader'
import { BurgerMenu } from '@/components/widgets/Salesman/BurgerMenu'
import { usePathname, useSearchParams } from 'next/navigation'
import { TSalesmanHomePageType } from '@/components/widgets/Salesman/HomePagesSwitcher'
import cls from './index.module.scss'

interface Props extends TChildren {}
const SidebarLayout: FC<Props> = ({ children }) => {
	const queryParams = useSearchParams()
	const homePageType = queryParams.get('homePageType') as TSalesmanHomePageType
	const width = useScreen()
	const path = usePathname()
	const isBuyerProfilePath = pathValidating(path, '/salesman/buyer-profile/?')
	const isSalesmanProfilePath = pathValidating(
		path,
		'/salesman/salesman-profile/?'
	)

	return (
		<div className={cn(cls.wrapper)}>
			{width > SM_BIG && <Sidebar homePageType={homePageType} />}
			<main className={cn(cls.main)}>
				{width <= SM_BIG && (
					<>
						<BurgerMenu homePageType={homePageType} className={cn(cls.menu)} />
						<MobileHeader className={cn(cls.header)} />
					</>
				)}
				<div
					className={cn(cls.content, [], {
						[cls.noPadding]:
							path === '/salesman/profile' ||
							isBuyerProfilePath ||
							isSalesmanProfilePath,
					})}
				>
					{children}
				</div>
			</main>
		</div>
	)
}

export { SidebarLayout }
