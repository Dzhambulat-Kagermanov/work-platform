import { FC } from 'react'
import { TClassName } from '@/types'
import { Typography } from '@/components/ui'
import { cn } from '@/lib'
import Link from 'next/link'
import cls from './index.module.scss'
import { TSalesmanHomePageType } from '..'

interface Props extends TClassName {
	slug: TSalesmanHomePageType
	text: string
	activeSlug: TSalesmanHomePageType
}
const Item: FC<Props> = ({ activeSlug, slug, text, className }) => {
	return (
		<Typography
			font='Inter-SB'
			size={14}
			className={cn(cls.wrapper, [className], {
				[cls.active]: activeSlug === slug,
			})}
		>
			<Link href={`/salesman?pageType=${slug}`}>{text}</Link>
		</Typography>
	)
}

export { Item }
