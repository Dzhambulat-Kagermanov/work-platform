import { FC } from 'react'
import cls from './index.module.scss'
import { TChatPlaqueProps, TClassName } from '@/types'
import { cn } from '@/lib'
import Image from 'next/image'

interface Props
	extends TClassName,
		Pick<TChatPlaqueProps, 'isOnline' | 'avatar'> {}
const ChatAvatarItem: FC<Props> = ({ isOnline, className, avatar }) => {
	return (
		<div
			className={cn(cls.avatar, [className], {
				[cls.isOnline]: isOnline,
			})}
		>
			<Image src={avatar} alt='Аватар' width={48} height={48} />
		</div>
	)
}

export { ChatAvatarItem }
