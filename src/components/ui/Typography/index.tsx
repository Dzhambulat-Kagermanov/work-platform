import { CSSProperties, FC, MouseEventHandler } from 'react'
import { TChildren, TClassName, TFontFamilies, TTag } from '@/types'
import { cn } from '@/lib'
import cls from './index.module.scss'

export type TTypography = { size: number; font: TFontFamilies }
export type TTypographyWeight = 'R' | 'M' | 'SB' | 'B'

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
	let fontSplit = font.split('-') as [string, TTypographyWeight]
	let weight: number

	switch (fontSplit[1]) {
		case 'R':
			weight = 400
			break
		case 'M':
			weight = 500
			break
		case 'SB':
			weight = 600
			break
		case 'B':
			weight = 700
			break
		default:
			weight = 400
			break
	}

	return (
		<Tag
			{...other}
			className={cn(cls.text, [className])}
			style={
				{
					'--size': `${size}px`,
					'--font': fontSplit[0],
					'--weight': weight,
				} as CSSProperties
			}
		>
			{children}
		</Tag>
	)
}

export { Typography }
