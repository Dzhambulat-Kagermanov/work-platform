'use client'
import { FC } from 'react'
import { TClassName, TState } from '@/types'
import { cn } from '@/lib'
import { Input, Typography } from '@/components/ui'
import Image from 'next/image'
import { SearchIcon } from '@/icons'
import { Chats } from './Chats'
import { MobileSwitcher } from './MobileSwitcher'
import { TChatType } from '../RansomsSidebar/types'
import cls from './index.module.scss'
import { useScreen } from '@/hooks'
import { XS_BIG } from '@/constants'

interface Props extends TClassName {
	activeIdSTUB?: number
	setActiveIdSTUB: TState<number | undefined>
	chatType: TChatType
}
const RansomsChats: FC<Props> = ({
	className,
	chatType,
	setActiveIdSTUB,
	activeIdSTUB,
}) => {
	const width = useScreen()
	return (
		<section className={cn(cls.wrapper, [className])}>
			<div className={cn(cls.head)}>
				{width > XS_BIG && (
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
							Выкупы
						</Typography>
					</div>
				)}
				<Input
					inpCls={cn(cls.inp)}
					contentCls={cn(cls.inp_content)}
					wrapperCls={cn(cls.inp_wrapper)}
					placeholder='Поиск...'
					icon={<SearchIcon color='var(--grey-300)' />}
				/>
				<MobileSwitcher className={cn(cls.switcher)} chatType={chatType} />
			</div>
			<div className={cn(cls.chat_wrapper)}>
				<Chats
					className={cn(cls.chat)}
					activeIdSTUB={activeIdSTUB}
					setActiveIdSTUB={setActiveIdSTUB}
				/>
			</div>
		</section>
	)
}

export { RansomsChats }
