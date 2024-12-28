import { FC } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import { TAuthLink } from '../constants/links'
import { ActiveLink, Typography } from '@/components/ui'
import cls from './index.module.scss'

interface Props extends TClassName, TAuthLink {}
const GroupItem: FC<Props> = ({ className, icon, link, text }) => {
	return (
		<li className={cn(cls.wrapper, [className])}>
			<ActiveLink
				activeCls={cn(cls.active)}
				className={cn(cls.link)}
				href={link}
			>
				{icon}
				<Typography font='Inter-SB' size={16}>
					{text}
				</Typography>
			</ActiveLink>
		</li>
	)
}

export { GroupItem }
