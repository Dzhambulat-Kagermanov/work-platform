import { FC } from 'react'
import { TModuleClassName } from '@/types'
import { Container } from '@/components/ui'
import { cn } from '@/lib'
import { HeadPart } from './HeadPart'
import { FooterPart } from './FooterPart'
import cls from './index.module.scss'

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
