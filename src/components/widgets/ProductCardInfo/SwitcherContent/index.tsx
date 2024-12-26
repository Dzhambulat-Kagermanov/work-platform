import { FC } from 'react'
import { TClassName, TProductItemProps } from '@/types'
import { cn } from '@/lib'
import { TContentType } from '../Switcher'
import { Description } from './Description'
import { Conditions } from './Conditions'
import { Reviews } from './Reviews'
import cls from './index.module.scss'

interface Props
	extends TClassName,
		Pick<TProductItemProps, 'id' | 'productDescription'> {
	contentType: TContentType
}
const SwitcherContent: FC<Props> = ({
	id,
	productDescription,
	contentType,
	className,
}) => {
	return (
		<div className={cn(cls.wrapper, [className])}>
			{contentType === 'conditions' ? (
				<Conditions className={cn(cls.content, [cls.conditions])} />
			) : contentType === 'description' ? (
				<Description
					productDescription={productDescription}
					className={cn(cls.content, [cls.description])}
				/>
			) : (
				<Reviews className={cn(cls.reviews)} itemCls={cn(cls.content)} />
			)}
		</div>
	)
}

export { SwitcherContent }
