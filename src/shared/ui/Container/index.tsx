import { FC } from 'react'
import cls from './index.module.scss'
import { TChildren, TClassName, TTag } from '@/shared/types'
import { cn } from '@/shared/lib'

interface Props extends TClassName, TTag, TChildren {}
const Container: FC<Props> = ({ className, children, tag }) => {
	const Tag = tag || 'div'
	return <Tag className={cn(cls.container, [className])}>{children}</Tag>
}

export { Container }
