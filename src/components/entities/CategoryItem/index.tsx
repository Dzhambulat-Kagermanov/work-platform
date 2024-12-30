import { FC } from 'react'
import { TClassName, TTag } from '@/types'
import { TCategoryItemProps } from '@/components/page/Category/constants/categories'
import { cn } from '@/lib'
import { Typography } from '@/components/ui'
import Image from 'next/image'
import cls from './index.module.scss'

interface Props extends TClassName, TCategoryItemProps, TTag {
	titleCls?: string
	plaqueCls?: string
}
const CategoryItem: FC<Props> = ({
	image,
	productsQnt,
	title,
	titleCls,
	className,
	plaqueCls,
	tag = 'div',
}) => {
	const Tag = tag

	return (
		<Tag className={cn(cls.wrapper, [className])}>
			<Image src={image} alt={title} width={200} height={235} />
			<Typography font='Inter-M' size={16} tag='h2' className={titleCls}>
				{title}
			</Typography>
			<Typography font='Inter-M' size={14} className={plaqueCls}>
				{productsQnt} товара
			</Typography>
		</Tag>
	)
}

export { CategoryItem }
