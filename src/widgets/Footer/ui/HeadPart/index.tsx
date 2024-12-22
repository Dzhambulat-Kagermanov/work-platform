import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { cn } from '@/shared/lib'
import { Socialbar } from '../Socialbar'
import { Navbar } from '../Navbar'
import { Contactsbar } from '../Contactsbar'
import cls from './index.module.scss'

interface Props extends TClassName {}
const HeadPart: FC<Props> = ({ className }) => {
	return (
		<div className={cn(cls.head, [className])}>
			<Socialbar />
			<Navbar />
			<Contactsbar />
		</div>
	)
}

export { HeadPart }
