import { FC } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import { Typography } from '@/components/ui'
import cls from './index.module.scss'

interface Props extends TClassName {}
const Head: FC<Props> = ({ className }) => {
	return (
		<div className={cn(cls.head, [className])}>
			<Typography tag='h2' font='Inter-SB' size={25}>
				Товары с кэшбеком:
			</Typography>
			<Typography tag='h3' font='Inter-R' size={14}>
				{`743 товаров`}
			</Typography>
		</div>
	)
}

export { Head }
