'use client'
import { FC } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import { BackButton, BreadCrumbs } from '@/components/ui'
import cls from './index.module.scss'
import { useScreen } from '@/hooks'
import { XS_BIG } from '@/constants'

interface Props extends TClassName {}
const BuyerProfileCrumbs: FC<Props> = ({ className }) => {
	const screen = useScreen()
	return (
		<>
			{screen > XS_BIG && (
				<section className={cn(cls.wrapper, [className])}>
					<BackButton
						href='/salesman?homePageType=ransoms'
						className={cn(cls.back_btn)}
					>
						Назад
					</BackButton>
					<BreadCrumbs
						className={cn(cls.crumbs)}
						items={[
							{ link: '/salesman', text: 'Продвижение' },
							{ link: '/salesman?homePageType=ransoms', text: 'Выкупы' },
							{ link: '#', text: 'Покупатель №14023' },
						]}
					/>
				</section>
			)}
		</>
	)
}

export { BuyerProfileCrumbs }
