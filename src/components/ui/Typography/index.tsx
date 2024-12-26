import { CSSProperties, FC } from 'react'
import cls from './index.module.scss'
import { TChildren, TClassName, TFontFamilies, TTag } from '@/types'
import { cn } from '@/lib'

interface Props extends TTag, TClassName, TChildren {
	size: number
	font: TFontFamilies
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
