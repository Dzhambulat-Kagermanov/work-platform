import { ReactNode, JSX } from 'react'

export type TClassName = { className?: string }
export type TWrapperClassName = { wrapperClassName?: string }
export type TModuleClassName = TClassName & TWrapperClassName
export type TChildren = { children: ReactNode }
export interface TTag {
	tag?: keyof JSX.IntrinsicElements
}
export type TIcon = {
	color: string
} & TClassName
