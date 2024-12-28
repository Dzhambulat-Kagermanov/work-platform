import { FC } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import { Dropdown, Typography } from '@/components/ui'
import { slugs } from '@/components/widgets/HomeSortModal/constants/slugs'
import cls from './index.module.scss'

interface Props extends TClassName {}
const SortContent: FC<Props> = ({ className }) => {
	return (
		<div className={cn(cls.wrapper, [className])}>
			<Typography font='Inter-SB' size={18} tag='h2'>
				Сортировка
			</Typography>
			<Dropdown
				expandTransition={{
					speedSeconds: 0.4,
					property: 'ease',
				}}
				icon={<div className={cn(cls.circle)} />}
				wrapperCls={cn(cls.drp_wrapper)}
				defaultActiveValue={slugs[0]}
				items={slugs.map(slug => {
					return {
						content: (
							<Typography font='Inter-M' size={16} className={cn(cls.drp_item)}>
								{slug}
							</Typography>
						),
						value: slug,
						onClick: () => {},
					}
				})}
			/>
		</div>
	)
}

export { SortContent }
