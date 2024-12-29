import { FC } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import cls from './index.module.scss'

interface Props extends TClassName {}
const RegistrationPage: FC<Props> = ({ className }) => {
	return <main className={cn(cls.registration, [className])}></main>
}

export { RegistrationPage }
