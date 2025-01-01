'use client'
import { FC, ReactNode } from 'react'
import { cn } from '@/lib'
import { Typography } from '../Typography'
import { IMaskInput, IMaskInputProps } from 'react-imask'
import cls from './index.module.scss'
import { ErrorIcon } from '@/icons'

interface Props
	extends Omit<IMaskInputProps<HTMLInputElement>, 'className' | 'value'> {
	icon?: ReactNode
	label?: string
	error?: string
	wrapperCls?: string
	inpCls?: string
	contentCls?: string
	labelCls?: string
	errorCls?: string
	value?: string
	lazy?: boolean
	placeholderChar?: string
	errorIcon?: true | ReactNode
}
const MaskInput: FC<Props> = ({
	icon,
	wrapperCls,
	contentCls,
	labelCls,
	value,
	inpCls,
	errorCls,
	label,
	errorIcon,
	error,
	...other
}) => {
	return (
		<div
			className={cn(cls.wrapper, [wrapperCls], {
				[cls.hasError]: !!error,
			})}
		>
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
				{/*@ts-ignore*/}
				<IMaskInput
					value={value}
					className={cn(cls.input, [inpCls])}
					{...other}
				/>
				{error &&
					(errorIcon === true ? (
						<ErrorIcon className={cn(cls.error_icon)} />
					) : (
						errorIcon
					))}
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

export { MaskInput }
