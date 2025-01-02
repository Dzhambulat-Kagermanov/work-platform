import { FC } from 'react'
import { TClassName } from '@/types'
import { Dropdown, Typography } from '@/components/ui'
import { HomeIcon } from '@/icons'
import { cn } from '@/lib'
import { Item } from '../Item'
import cls from './index.module.scss'

interface Props extends TClassName {
	sidebarIsExpand: boolean
}
const LinksDropdown: FC<Props> = ({ className, sidebarIsExpand }) => {
	return (
		<li className={cn(cls.wrapper, [className])}>
			<Dropdown
				wrapperCls={cn(cls.dropdown_wrapper, [])}
				activeItemCls={cn(cls.dropdown_active, [], {
					[cls.sidebarIsExpand]: sidebarIsExpand,
				})}
				contentCls={cn(cls.dropdown_content)}
				itemCls={cn(cls.dropdown_item)}
				isExpandCls={cn(cls.dropdown_isExpand)}
				noCollapseWhenSelect
				noSwitchActiveWhenSelect
				expandType='inline'
				defaultActiveValue='title'
				items={[
					{
						content: (
							<Item
								textOverlayCls={cn(cls.text_overlay)}
								sidebarIsExpand={sidebarIsExpand}
								icon={
									<HomeIcon color='var(--grey-200)' className={cn(cls.icon)} />
								}
								text='Продвижение'
								className={cn(cls.item)}
							/>
						),
						value: 'title',
					},
					{
						content: (
							<Item
								sidebarIsExpand={sidebarIsExpand}
								icon={
									<HomeIcon color='var(--grey-200)' className={cn(cls.icon)} />
								}
								additionalInfo={
									<Typography
										font='Inter-SB'
										size={16}
										className={cn(cls.additional)}
									>
										19
									</Typography>
								}
								link='/salesman/products'
								text='Товары'
								className={cn(cls.item, [cls.subitem])}
							/>
						),
						value: 'Товары',
					},
					{
						content: (
							<Item
								sidebarIsExpand={sidebarIsExpand}
								icon={
									<HomeIcon color='var(--grey-200)' className={cn(cls.icon)} />
								}
								additionalInfo={
									<Typography
										font='Inter-SB'
										size={16}
										className={cn(cls.additional)}
									>
										5
									</Typography>
								}
								link='/salesman/advertisements'
								text='Объявления'
								className={cn(cls.item, [cls.subitem])}
							/>
						),
						value: 'Объявления',
					},
					{
						content: (
							<Item
								sidebarIsExpand={sidebarIsExpand}
								icon={
									<HomeIcon color='var(--grey-200)' className={cn(cls.icon)} />
								}
								additionalInfo={
									<Typography
										font='Inter-SB'
										size={16}
										className={cn(cls.additional)}
									>
										37
									</Typography>
								}
								link='/salesman/ransoms'
								text='Выкупы'
								className={cn(cls.item, [cls.subitem])}
							/>
						),
						value: 'Выкупы',
					},
				]}
			/>
		</li>
	)
}

export { LinksDropdown }
