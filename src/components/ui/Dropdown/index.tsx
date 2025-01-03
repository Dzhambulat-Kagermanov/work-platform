'use client'
import {
	CSSProperties,
	FC,
	MouseEventHandler,
	ReactNode,
	useEffect,
	useState,
} from 'react'
import { cn } from '@/lib'
import { Typography } from '../Typography'
import { ExpandArrowIcon } from '@/icons'
import cls from './index.module.scss'

export type TDropdownTransition = {
	property?: string
	speedSeconds: number
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
	placeholder?: string | ReactNode
	// Отключение / Включение
	disable?: boolean
	// Плавность для расшаривания списка
	expandTransition?: TDropdownTransition
	// Как будет выпадать список
	expandType?: 'absolute' | 'inline'
	// Не менять активный item при клике на не активный item
	noSwitchActiveWhenSelect?: boolean
	// Не закрывать меню при клике на item
	noCollapseWhenSelect?: boolean
	isExpandState?: boolean
	wrapperCls?: string
	placeholderCls?: string
	activeItemCls?: string
	contentCls?: string
	itemCls?: string
	iconCls?: string
	// Активный item по умолчанию
	defaultActiveValue?: TDropdownValue
	// Кастомная иконка открывания выпадающего списка
	icon?: ReactNode
	isExpandCls?: string
}
const Dropdown: FC<Props> = ({
	items,
	isExpandCls,
	setActiveItem,
	activeItemCls,
	expandType = 'absolute',
	wrapperCls,
	contentCls,
	disable,
	itemCls,
	placeholder = 'Выберите',
	iconCls,
	expandTransition,
	isExpandState,
	placeholderCls,
	defaultActiveValue,
	noSwitchActiveWhenSelect,
	noCollapseWhenSelect,
	icon,
}) => {
	const [active, setActive] = useState<TDropdownItem | null>(
		defaultActiveValue
			? items.find(({ value }) => {
					return value === defaultActiveValue
			  }) || null
			: null
	)

	const [isExpand, setIsExpand] = useState<boolean>(!!isExpandState)

	useEffect(() => {
		if (isExpandState !== undefined) {
			setIsExpand(isExpandState)
		}
	}, [isExpandState])

	return (
		<div
			className={cn(cls.dropdown, [wrapperCls, cls[expandType]], {
				[cls.isExpand]: isExpand,
				[isExpandCls || cls['isExpand']]: isExpand,
				[cls.disable]: !!disable,
			})}
			style={
				{
					'--expandTransition': expandTransition
						? `${expandTransition.speedSeconds}s ${
								expandTransition.property || 'linear'
						  }`
						: '0.2s ease',
				} as CSSProperties
			}
		>
			<button
				type='button'
				className={cn(cls.active, [activeItemCls])}
				onClick={() => {
					if (!disable) setIsExpand(cur => !cur)
				}}
			>
				{active ? (
					<div className={cn(cls.active_content)}>{active.content}</div>
				) : typeof placeholder === 'string' ? (
					<Typography
						font='Inter-SB'
						size={14}
						className={cn(cls.placeholder, [placeholderCls])}
					>
						{placeholder}
					</Typography>
				) : (
					placeholder
				)}
				{icon || (
					<ExpandArrowIcon
						color='var(--grey-300)'
						className={cn(cls.icon, [iconCls])}
					/>
				)}
			</button>
			<div className={cn(cls.content_wrapper)}>
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
										!noSwitchActiveWhenSelect && setActive(props)
										onClick && onClick(e)
										!noSwitchActiveWhenSelect &&
											setActiveItem &&
											setActiveItem(props)
										!noCollapseWhenSelect && setIsExpand(false)
									}}
								>
									{content}
								</li>
							)
						})}
				</ul>
			</div>
		</div>
	)
}

export { Dropdown }
