import { FC } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import { Input, Typography } from '@/components/ui'
import Image from 'next/image'
import { SearchIcon } from '@/icons'
import { Chats } from './Chats'
import cls from './index.module.scss'

interface Props extends TClassName {}
const DeliveryChats: FC<Props> = ({ className }) => {
	return (
		<section className={cn(cls.wrapper, [className])}>
			<div className={cn(cls.head)}>
				<div className={cn(cls.preview)}>
					<Image
						src='/images/delivery/order.svg'
						alt='Мои заказы'
						width={24}
						height={24}
					/>
					<Typography
						className={cn(cls.title)}
						tag='h1'
						font='Inter-B'
						size={24}
					>
						Мои заказы
					</Typography>
				</div>
				<Input
					inpCls={cn(cls.inp)}
					contentCls={cn(cls.inp_content)}
					wrapperCls={cn(cls.inp_wrapper)}
					placeholder='Поиск...'
					icon={<SearchIcon color='var(--grey-300)' />}
				/>
			</div>
			<div className={cn(cls.chat_wrapper)}>
				<Chats className={cn(cls.chat)} />
			</div>
		</section>
	)
}

export { DeliveryChats }
