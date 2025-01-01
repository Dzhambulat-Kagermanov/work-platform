import { FC } from 'react'
import { TClassName, TTag } from '@/types'
import { cn } from '@/lib'
import Image from 'next/image'
import { Typography } from '@/components/ui'
import cls from './index.module.scss'

interface Props extends TClassName, TTag {
	type: 'confirm-action' | 'fail-action'
	message: string
}
const MessagesAreaActionType: FC<Props> = ({
	message,
	type,
	className,
	tag = 'div',
}) => {
	const Tag = tag
	return (
		<Tag className={cn(cls.wrapper, [className])}>
			<Image
				src={
					type === 'confirm-action'
						? '/images/delivery/confirm-action.svg'
						: '/images/delivery/fail-action.svg'
				}
				alt={'Действие'}
				width={32}
				height={32}
			/>
			<Typography font='Inter-R' size={18} tag='h3'>
				{message}
			</Typography>
		</Tag>
	)
}

export { MessagesAreaActionType }
