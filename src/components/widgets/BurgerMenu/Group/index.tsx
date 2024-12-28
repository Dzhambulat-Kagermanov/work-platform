import { FC } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import { AUTH_LINKS, NOT_AUTH_LINKS } from '../constants/links'
import { GroupItem } from '../GroupItem'
import cls from './index.module.scss'

interface Props extends TClassName {
	isAuth: boolean
}
const Group: FC<Props> = ({ className, isAuth }) => {
	const links = isAuth ? AUTH_LINKS : NOT_AUTH_LINKS

	return (
		<ul className={cn(cls.wrapper, [className])}>
			{links.map(({ icon, link, text }) => {
				return (
					<GroupItem
						key={`${text}${link}`}
						icon={icon}
						link={link}
						text={text}
						className={cn(cls.item)}
					/>
				)
			})}
		</ul>
	)
}

export { Group }
