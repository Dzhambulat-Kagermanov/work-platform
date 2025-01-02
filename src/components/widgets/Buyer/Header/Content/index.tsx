'use client'
import { FC } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import { Input } from '@/components/ui'
import { SearchIcon } from '@/icons'
import { Logo } from '@/components/widgets/shared/Logo'
import { Navbar } from '../Navbar'
import { useScreen } from '@/hooks'
import { BurgerMenu } from '@/components/features/BurgerMenu'
import { MD_LOW, SM_BIG } from '@/constants'
import cls from './index.module.scss'

interface Props extends TClassName {}
const Content: FC<Props> = ({ className }) => {
	const width = useScreen()

	return (
		<div className={cn(cls.content, [className, cls.cont])}>
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
