import { FC } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import { PRODUCTS } from './constants/products'
import cls from './index.module.scss'
import { HomeTable } from '../HomeTable'
import { ProductsTableBodyItem } from '@/components/entities/ProductsTableBodyItem'

interface Props extends TClassName {}
const HomeProductsContent: FC<Props> = ({ className }) => {
	return (
		<HomeTable
			body={PRODUCTS.map(({ id, ...other }) => (
				<ProductsTableBodyItem id={id} key={id} {...other} />
			))}
			head={[
				'Товар',
				'Статус',
				'Выкупов',
				'Просмотры',
				'Выкупы',
				'Конверсия',
				'Объявлений',
			]}
			pagination={{
				pages: {
					current: 1,
					max: 10,
				},
			}}
			bodyCls={cn(cls.body)}
			bodyRowCls={cn(cls.body_row)}
			className={cn(cls.wrapper, [className])}
			headCls={cn(cls.head)}
			headCol={cn(cls.head_col)}
			headRowCls={cn(cls.head_row)}
			tableCls={cn(cls.table)}
			tableWrapperCls={cn(cls.table_wrapper)}
		/>
	)
}

export { HomeProductsContent }
