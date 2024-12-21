import { FC } from 'react'
import { TClassName } from '@/shared/types'
import cls from './index.module.scss'
import { cn } from '@/shared/lib'

interface Props extends TClassName {}
const HomePage: FC<Props> = ({ className }) => {
	return <div className={cn(cls.home, [className])}>Home</div>
}

export { HomePage }
