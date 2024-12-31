import { FC } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import Image from 'next/image'
import cls from './index.module.scss'

interface Props extends TClassName {}
const ViewChatSendMessage: FC<Props> = ({ className }) => {
	return (
		<button className={cn(cls.btn, [className])}>
			<Image
				src={'/images/delivery/send.svg'}
				alt='Отправить'
				width={20}
				height={20}
				className={cn(cls.icon)}
			/>
		</button>
	)
}

export { ViewChatSendMessage }
