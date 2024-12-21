import { CSSProperties, FC } from 'react'
import { TChildren, TClassName } from '@/shared/types'
import { cn } from '@/shared/lib'
import cls from './index.module.scss'
import Link from 'next/link'

interface Props extends TClassName, TChildren {
	size: number
	font: 'Muller-R' | 'Raleway-M' | 'Raleway-SB'
	href: string
}
const TypographyLink: FC<Props> = ({
	children,
	className,
	size,
	font,
	href,
}) => {
	return (
		<Link
			href={href}
			className={cn(cls.text, [className])}
			style={
				{
					'--size': `${size}px`,
					'--font': font,
				} as CSSProperties
			}
		>
			{children}
		</Link>
	)
}

export { TypographyLink }
