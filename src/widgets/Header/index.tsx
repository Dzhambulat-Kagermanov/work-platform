import { FC } from 'react'
import cls from './index.module.scss'
import { TModuleClassName } from '@/shared/types'
import { cn } from '@/shared/lib'
import { Container } from '@/shared/ui'

interface Props extends TModuleClassName {}
const Header: FC<Props> = ({ className, wrapperClassName }) => {
	return (
		<header className={cn(cls.wrapper, [wrapperClassName])}>
			<Container className={cn(cls.container, [className])}>Header</Container>
		</header>
	)
}

export { Header }
