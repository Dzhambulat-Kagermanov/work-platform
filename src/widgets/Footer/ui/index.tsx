import { FC } from 'react'
import { TModuleClassName } from '@/shared/types'
import { Container } from '@/shared/ui'
import { cn } from '@/shared/lib'
import { HeadPart } from './HeadPart'
import cls from './index.module.scss'
import { FooterPart } from './FooterPart'

interface Props extends TModuleClassName {}
const Footer: FC<Props> = ({ className, wrapperClassName }) => {
	return (
		<footer className={cn(cls.wrapper, [wrapperClassName])}>
			<Container className={cn(cls.container, [className])}>
				<HeadPart />
				<FooterPart />
			</Container>
		</footer>
	)
}

export { Footer }
