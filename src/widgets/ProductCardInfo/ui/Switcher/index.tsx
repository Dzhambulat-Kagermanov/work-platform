'use client'
import { FC, useState } from 'react'
import { TClassName, TProductItemProps } from '@/shared/types'
import { cn } from '@/shared/lib'
import { SwitcherActions } from '../SwitcherActions'
import { SwitcherContent } from '../SwitcherContent'
import cls from './index.module.scss'

export type TContentType = 'conditions' | 'description' | 'reviews'

interface Props
	extends TClassName,
		Pick<TProductItemProps, 'id' | 'productDescription'> {}
const Switcher: FC<Props> = ({ id, productDescription, className }) => {
	const [contentType, setContentType] = useState<TContentType>('conditions')

	return (
		<section className={cn(cls.wrapper, [className])}>
			<SwitcherActions
				className={cn(cls.actions)}
				contentType={contentType}
				setContentType={setContentType}
			/>
			<SwitcherContent
				contentType={contentType}
				id={id}
				productDescription={productDescription}
				className={cn(cls.content)}
			/>
		</section>
	)
}

export { Switcher }
