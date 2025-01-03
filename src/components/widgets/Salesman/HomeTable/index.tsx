import { FC } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import { Typography } from '@/components/ui'
import { PRODUCTS } from './constants/products'
import { BodyRow } from './BodyRow'
import { Pagination } from '../../shared/Pagination'
import cls from './index.module.scss'

interface Props extends TClassName {}
const HomeTable: FC<Props> = ({ className }) => {
	return (
		<div className={cn(cls.wrapper, [className])}>
			<div className={cn(cls.table_wrapper)}>
				<table className={cn(cls.table)}>
					<thead className={cn(cls.head)}>
						<tr className={cn(cls.row)}>
							<td className={cn(cls.column)}>
								<Typography font='Inter-M' size={12}>
									Товар
								</Typography>
							</td>
							<td className={cn(cls.column)}>
								<Typography font='Inter-M' size={12}>
									Статус
								</Typography>
							</td>
							<td className={cn(cls.column)}>
								<Typography font='Inter-M' size={12}>
									Выкупов
								</Typography>
							</td>
							<td className={cn(cls.column)}>
								<Typography font='Inter-M' size={12}>
									Просмотры
								</Typography>
							</td>
							<td className={cn(cls.column)}>
								<Typography font='Inter-M' size={12}>
									Выкупы
								</Typography>
							</td>
							<td className={cn(cls.column)}>
								<Typography font='Inter-M' size={12}>
									Конверсия
								</Typography>
							</td>
							<td className={cn(cls.column)}>
								<Typography font='Inter-M' size={12}>
									Объявлений
								</Typography>
							</td>
						</tr>
					</thead>
					<tbody className={cn(cls.body)}>
						{PRODUCTS.map(({ id, ...props }) => {
							return (
								<BodyRow
									id={id}
									key={id}
									{...props}
									className={cn(cls.row)}
									columnCls={cn(cls.column)}
								/>
							)
						})}
					</tbody>
				</table>
			</div>
			<Pagination
				className={cn(cls.pagination)}
				pages={{
					current: 1,
					max: 10,
				}}
			/>
		</div>
	)
}

export { HomeTable }
