'use client'
import { FC, memo } from 'react'
import { TClassName, TProductItemProps } from '@/shared/types'
import { cn } from '@/shared/lib'
import { ContentHead } from '../ContentHead'
import { ContentSales } from '../ContentSales'
import { ContentActions } from '../ContentActions'
import { ContentShop } from '../ContentShop'
import { getSalesmanInfo } from '@/shared/api/salesman/get'
import { useQuery } from '@tanstack/react-query'
import cls from './index.module.scss'

interface Props extends TClassName {
	data: Omit<
		TProductItemProps,
		'previewImage' | 'productDescription' | 'images' | 'quantities'
	>
}
export const queryKey = ['productCard', 'salesman']

const Content: FC<Props> = memo(
	({
		className,
		data: { name, price, salesmanId, tooltip, id, isFavorite },
	}) => {
		const { data, error, isPending, isFetching } = useQuery({
			queryKey,
			queryFn: () => getSalesmanInfo(salesmanId),
			refetchOnWindowFocus: false,
		})

		return (
			<section className={cn(cls.content, [className])}>
				{data && (
					<>
						<ContentHead
							salesman={data}
							className={cn(cls.head)}
							name={name}
							price={price}
							tooltip={tooltip}
						/>
						<ContentSales className={cn(cls.sales)} salesman={data} />
					</>
				)}
				<ContentActions
					id={id}
					className={cn(cls.actions)}
					isFavorite={isFavorite}
				/>
				{data && <ContentShop salesman={data} className={cn(cls.shop)} />}
			</section>
		)
	}
)

export { Content }
