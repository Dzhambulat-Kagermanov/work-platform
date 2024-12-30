import { FC } from 'react'
import { TClassName } from '@/types'
import { Typography, Input } from '@/components/ui'
import { cn } from '@/lib'
import cls from './index.module.scss'

interface Props extends TClassName {}
const Content: FC<Props> = ({ className }) => {
	return (
		<>
			<Typography tag='h2' font='Inter-SB' size={18} className={cn(cls.title)}>
				Цена, ₽
			</Typography>
			<div className={cn(cls.inputs)}>
				<Input placeholder='от' />
				<hr />
				<Input placeholder='до' />
			</div>
		</>
	)
}

export { Content }
