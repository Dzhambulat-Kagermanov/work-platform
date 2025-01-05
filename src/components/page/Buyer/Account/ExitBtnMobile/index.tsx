'use client'
import { FC } from 'react'
import { AccountExit } from '@/components/features/AccountExit'
import { cn } from '@/lib'
import { TClassName } from '@/types'
import cls from './index.module.scss'

interface Props extends TClassName {}
const ExitBtnMobile: FC<Props> = ({ className }) => {
	return <AccountExit className={cn(cls.btn, [className])} />
}

export { ExitBtnMobile }
