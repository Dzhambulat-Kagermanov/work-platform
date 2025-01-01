'use client'
import { FC } from 'react'
import { TClassName, TProductItemProps, TSalesmanInfo } from '@/types'
import { cn } from '@/lib'
import { Typography } from '@/components/ui'
import Link from 'next/link'
import Image from 'next/image'
import cls from './index.module.scss'
import { getSalesmanInfo } from '@/api/salesman/get'
import { useQuery } from '@tanstack/react-query'
import { queryKey } from '../Content'

interface Props extends TClassName, Pick<TProductItemProps, 'salesmanId'> {}
const ContentShop: FC<Props> = ({ salesmanId, className }) => {
	const { data, error, isPending, isFetching } = useQuery({
		queryKey,
		queryFn: () => getSalesmanInfo(salesmanId),
		refetchOnWindowFocus: false,
	})

	return (
		<div className={cn(cls.wrapper, [className])}>
			{data && (
				<Typography font='Inter-SB' size={16} tag='h6'>
					{data.shopName}
				</Typography>
			)}
			<div className={cn(cls.content)}>
				<Link href='/buyer/salesman/1' className={cn(cls.link)}>
					<Typography font='Inter-R' size={16}>
						Подробнее
					</Typography>
				</Link>
				<div className={cn(cls.rating)}>
					<Image
						src={'/images/shared/rating/star-v2.svg'}
						alt='Рейтинг'
						width={15}
						height={15}
					/>
					{data && (
						<Typography font='Inter-R' size={16}>
							{data.rating}
						</Typography>
					)}
				</div>
			</div>
		</div>
	)
}

export { ContentShop }
