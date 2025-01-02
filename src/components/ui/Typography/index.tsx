import { CSSProperties, FC, MouseEventHandler } from 'react'
import { TChildren, TClassName, TFontFamilies, TTag } from '@/types'
import { cn } from '@/lib'
import cls from './index.module.scss'

export type TTypography = { size: number; font: TFontFamilies }

interface Props extends TTag, TClassName, TChildren, TTypography {
	other?: any
}
const Typography: FC<Props> = ({
	tag = 'p',
	children,
	className,
	size,
	font,
	other,
}) => {
	const Tag = tag
	return (
		<Tag
			{...other}
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
