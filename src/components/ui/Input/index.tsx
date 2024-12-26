import { FC, InputHTMLAttributes, ReactNode } from 'react'
import cls from './index.module.scss'
import { cn } from '@/lib'
import { Typography } from '../Typography'

interface Props
	extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className'> {
	icon?: ReactNode
	label?: string
	error?: string
	wrapperCls?: string
	inpCls?: string
	contentCls?: string
	labelCls?: string
	errorCls?: string
}
const Input: FC<Props> = ({
	icon,
	wrapperCls,
	contentCls,
	labelCls,
	inpCls,
	errorCls,
	label,
	error,
	...other
}) => {
	return (
		<div className={cn(cls.wrapper, [wrapperCls])}>
			{label && (
				<Typography
					font='Inter-M'
					size={14}
					className={cn(cls.label, [labelCls])}
				>
					{label}
				</Typography>
			)}
			<div
				className={cn(cls.content, [contentCls], {
					[cls.has_icon]: icon !== undefined,
				})}
			>
				{icon}
				<input className={cn(cls.input, [inpCls])} {...other} />
			</div>
			{error && (
				<Typography
					font='Inter-M'
					size={14}
					className={cn(cls.error, [errorCls])}
				>
					{error}
				</Typography>
			)}
		</div>
	)
}

export { Input }
