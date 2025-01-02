import { TClassName } from '@/types'
import { FC } from 'react'
import cls from './index.module.scss'
import { cn } from '@/lib'

interface Props extends TClassName {}
const ProfilePage: FC<Props> = ({ className }) => {
	return <div className={cn(cls.main, [className])}>1</div>
}

export { ProfilePage }
