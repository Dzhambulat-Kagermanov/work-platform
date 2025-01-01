'use client'
import { FC } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import { TAuthLink } from '../constants/links'
import { ActiveLink, Typography } from '@/components/ui'
import cls from './index.module.scss'

interface Props extends TClassName, TAuthLink {
	actionForLinkClick?: (value?: any) => void
}
const GroupItem: FC<Props> = ({
	className,
	icon,
	link,
	text,
	actionForLinkClick,
}) => {
	const handleClick = () => {
		actionForLinkClick && actionForLinkClick()
	}

	return (
		<li className={cn(cls.wrapper, [className])} onClick={handleClick}>
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
