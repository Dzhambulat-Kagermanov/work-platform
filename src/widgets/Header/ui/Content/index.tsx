'use client'
import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { cn } from '@/shared/lib'
import { Input } from '@/shared/ui'
import { SearchIcon } from '@/shared/icons'
import { Logo } from '@/widgets/Logo'
import { Navbar } from '../Navbar'
import { useScreen } from '@/shared/hooks'
import { BurgerMenu } from '@/features/BurgerMenu'
import { MD_LOW, SM_BIG } from '@/shared/constants'
import cls from './index.module.scss'
import adt from '../adaptive.module.scss'

interface Props extends TClassName {}
const Content: FC<Props> = ({ className }) => {
	const width = useScreen()

	return (
		<div className={cn(cls.content, [className, adt.content, adt.cont])}>
			{width > MD_LOW && <Logo className={cn(cls.logo)} />}
			{width <= SM_BIG && <BurgerMenu />}
			<Input
				placeholder='Поиск'
				icon={
					<SearchIcon color='var(--purple-100)' className={cn(cls.inp_icon)} />
				}
				wrapperCls={cn(cls.inp_wrapper)}
				contentCls={cn(cls.inp_content)}
				inpCls={cn(cls.inp)}
			/>
			{width > SM_BIG && <Navbar className={cn(cls.navbar)} />}
		</div>
	)
}

export { Content }
