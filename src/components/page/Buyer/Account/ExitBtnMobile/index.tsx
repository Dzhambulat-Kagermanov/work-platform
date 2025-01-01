'use client'
import { FC } from 'react'
import { useScreen } from '@/hooks'
import { AccountExit } from '@/components/features/AccountExit'
import { MD_BIG } from '@/constants'
import { cn } from '@/lib'
import cls from './index.module.scss'
import { TClassName } from '@/types'

interface Props extends TClassName {}
const ExitBtnMobile: FC<Props> = ({ className }) => {
	const width = useScreen()
	return (
		<>
			{width <= MD_BIG && <AccountExit className={cn(cls.btn, [className])} />}
		</>
	)
}

export { ExitBtnMobile }
