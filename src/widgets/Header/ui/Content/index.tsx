import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { cn } from '@/shared/lib'
import { Input } from '@/shared/ui'
import { SearchIcon } from '@/shared/icons'
import { Logo } from '@/widgets/Logo'
import { Navbar } from '../Navbar'
import cls from './index.module.scss'

interface Props extends TClassName {}
const Content: FC<Props> = ({ className }) => {
	return (
		<div className={cn(cls.content, [className])}>
			<Logo className={cn(cls.logo)} />
			<Input
				placeholder='Поиск'
				icon={
					<SearchIcon color='var(--purple-100)' className={cn(cls.inp_icon)} />
				}
				wrapperCls={cn(cls.inp_wrapper)}
				contentCls={cn(cls.inp_content)}
				inpCls={cn(cls.inp)}
			/>
			<Navbar className={cn(cls.navbar)} />
		</div>
	)
}

export { Content }
