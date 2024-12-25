'use client'
import { FC } from 'react'
import { TClassName, TProductItemProps } from '@/shared/types'
import { cn } from '@/shared/lib'
import { Typography } from '@/shared/ui'
import cls from './index.module.scss'

interface Props
	extends TClassName,
		Pick<TProductItemProps, 'productDescription'> {}
const Description: FC<Props> = ({ productDescription, className }) => {
	return (
		<div className={cn(cls.wrapper, [className])}>
			<Typography font='Inter-R' size={14} tag='h2'>
				{productDescription}
			</Typography>
		</div>
	)
}

export { Description }
