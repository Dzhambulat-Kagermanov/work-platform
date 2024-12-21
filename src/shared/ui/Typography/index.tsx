import { CSSProperties, FC } from 'react'
import cls from './index.module.scss'
import { TChildren, TClassName, TTag } from '@/shared/types'
import { cn } from '@/shared/lib'

interface Props extends TTag, TClassName, TChildren {
	size: number
	font: 'Muller-R' | 'Raleway-M' | 'Raleway-SB'
}
const Typography: FC<Props> = ({
	tag = 'p',
	children,
	className,
	size,
	font,
}) => {
	const Tag = tag
	return (
		<Tag
			className={cn(cls.text, [className])}
			style={
				{
					'--size': `${size}px`,
					'--font': font,
				} as CSSProperties
			}
		>
			{children}
		</Tag>
	)
}

export { Typography }
