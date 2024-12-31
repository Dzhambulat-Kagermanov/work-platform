import { CSSProperties, FC } from 'react'
import { TChildren, TClassName, TFontFamilies, TTag } from '@/types'
import { cn } from '@/lib'
import cls from './index.module.scss'

export type TTypography = { size: number; font: TFontFamilies }

interface Props extends TTag, TClassName, TChildren, TTypography {}
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
