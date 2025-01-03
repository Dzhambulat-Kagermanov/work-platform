'use client'
import { FC } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import { Content } from './Content'
import { Paid } from './Paid'
import { Actions } from './Actions'
import { useScreen } from '@/hooks'
import cls from './index.module.scss'

interface Props extends TClassName {}
const BalanceInfo: FC<Props> = ({ className }) => {
	const width = useScreen()
	return (
		<section className={cn(cls.wrapper, [className])}>
			<div className={cn(cls.info)}>
				<Content className={cn(cls.content)} />
				<Actions className={cn(cls.actions)} />
			</div>
			{width > 700 && <Paid className={cn(cls.paid)} />}
		</section>
	)
}

export { BalanceInfo }
