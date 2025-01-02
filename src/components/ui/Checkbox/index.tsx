'use client'
import { FC, InputHTMLAttributes } from 'react'
import { cn } from '@/lib'
import { Typography } from '../Typography'
import cls from './index.module.scss'

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
	label?: string
}
const Checkbox: FC<Props> = ({ className, label, ...other }) => {
	return (
		<label className={cn(cls.label, [className])}>
			<input type='checkbox' className={cn(cls.inp)} {...other} />
			{label && (
				<Typography font='Inter-R' size={16}>
					{label}
				</Typography>
			)}
		</label>
	)
}

export { Checkbox }
