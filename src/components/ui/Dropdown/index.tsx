'use client'
import {
	CSSProperties,
	FC,
	MouseEventHandler,
	ReactNode,
	useState,
} from 'react'
import { cn } from '@/lib'
import { Typography } from '../Typography'
import { ExpandArrowIcon } from '@/icons'
import cls from './index.module.scss'

export type TDropdownTransition = {
	property?: string
	speed: number
}
export type TDropdownValue = string | number | boolean
export type TDropdownItem = {
	value: TDropdownValue
	content: ReactNode
	onClick?: MouseEventHandler
}

interface Props {
	// Все элементы для отрисовки
	items: TDropdownItem[]
	// Обновить состояние на активный элемент
	setActiveItem?: (val: TDropdownItem) => void
	// Текст для заполнителя
	placeholder?: string
	// Отключение / Включение
	disable?: boolean
	// Плавность для расшаривания списка
	expandTransition?: TDropdownTransition
	wrapperCls?: string
	placeholderCls?: string
	activeItemCls?: string
	contentCls?: string
	itemCls?: string
	iconCls?: string
}
const Dropdown: FC<Props> = ({
	items,
	setActiveItem,
	activeItemCls,
	wrapperCls,
	contentCls,
	disable,
	itemCls,
	placeholder = 'Выберите',
	iconCls,
	expandTransition,
	placeholderCls,
}) => {
	const [active, setActive] = useState<TDropdownItem | null>(null)
	const [isExpand, setIsExpand] = useState<boolean>(false)

	return (
		<div
			className={cn(cls.dropdown, [wrapperCls], {
				[cls.isExpand]: isExpand,
				[cls.disable]: !!disable,
			})}
			style={
				{
					'--expandTransition': expandTransition
						? `${expandTransition.speed} ${expandTransition.property}`
						: '0.2s ease',
				} as CSSProperties
			}
		>
			<button
				className={cn(cls.active, [activeItemCls])}
				onClick={() => {
					if (!disable) setIsExpand(cur => !cur)
				}}
			>
				{active ? (
					<div className={cn(cls.active_content)}>{active.content}</div>
				) : (
					<Typography
						font='Inter-SB'
						size={14}
						className={cn(cls.placeholder, [placeholderCls])}
					>
						{placeholder}
					</Typography>
				)}
				<ExpandArrowIcon
					color='var(--grey-300)'
					className={cn(cls.icon, [iconCls])}
				/>
			</button>
			<ul className={cn(cls.content, [contentCls])}>
				{items
					.filter(({ value }) => (active ? active.value !== value : true))
					.map((props, index) => {
						const { content, onClick } = props
						return (
							<li
								key={index}
								className={cn(cls.item, [itemCls])}
								onClick={e => {
									setActive(props)
									onClick && onClick(e)
									setActiveItem && setActiveItem(props)
									setIsExpand(false)
								}}
							>
								{content}
							</li>
						)
					})}
			</ul>
		</div>
	)
}

export { Dropdown }
