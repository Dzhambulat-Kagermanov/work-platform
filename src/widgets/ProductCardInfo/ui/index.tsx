import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { cn } from '@/shared/lib'
import { Container } from '@/shared/ui'
import cls from './index.module.scss'

interface Props extends TClassName {}
const ProductCardInfo: FC<Props> = ({ className }) => {
	return <Container className={cn(cls.container, [className])}>Info</Container>
}

export { ProductCardInfo }
