'use client'
import { FC } from 'react'
import { TClassName } from '@/types'
import { Container, Typography } from '@/components/ui'
import { cn } from '@/lib'
import cls from './index.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
import { ReviewItem } from '@/components/entities/ReviewItem'
import Image from 'next/image'
import { ActionArrowIcon } from '@/icons'

interface Props extends TClassName {}
const SalesmanInfoReviews: FC<Props> = ({ className }) => {
	return (
		<Container tag='section' className={cn(cls.wrapper, [className])}>
			<div className={cn(cls.head)}>
				<Typography font='Inter-B' size={25} tag='h2'>
					Отзывы о продавце
				</Typography>
				<Typography font='Inter-R' size={25}>
					(13)
				</Typography>
			</div>
			<div className={cn(cls.content)}>
				<Swiper
					className={cn(cls.slider)}
					slidesPerView={3}
					loop
					spaceBetween={15}
					modules={[Navigation]}
					navigation={{
						enabled: true,
						nextEl: `.${cls.next_btn}`,
						prevEl: `.${cls.prev_btn}`,
					}}
				>
					<SwiperSlide className={cn(cls.item)}>
						<ReviewItem
							date='29 июля, 2023'
							rating={5}
							subtitle='Все прошло отлично! Я сразу получила кешбэк после того как продацев подтвердил мои действия.'
							title='Анна'
							productName='Зарядка для iphone 20W type-c быстрое устройство'
							className={cn(cls.review)}
						/>
					</SwiperSlide>
					<SwiperSlide className={cn(cls.item)}>
						<ReviewItem
							date='29 июля, 2023'
							rating={5}
							subtitle='Все прошло отлично! Я сразу получила кешбэк после того как продацев подтвердил мои действия.'
							title='Анна'
							productName='Зарядка для iphone 20W type-c быстрое устройство'
							className={cn(cls.review)}
						/>
					</SwiperSlide>
					<SwiperSlide className={cn(cls.item)}>
						<ReviewItem
							date='29 июля, 2023'
							rating={5}
							subtitle='Все прошло отлично! Я сразу получила кешбэк после того как продацев подтвердил мои действия.'
							title='Анна'
							productName='Зарядка для iphone 20W type-c быстрое устройство'
							className={cn(cls.review)}
						/>
					</SwiperSlide>
					<SwiperSlide className={cn(cls.item)}>
						<ReviewItem
							date='29 июля, 2023'
							rating={5}
							subtitle='Все прошло отлично! Я сразу получила кешбэк после того как продацев подтвердил мои действия.'
							title='Анна'
							productName='Зарядка для iphone 20W type-c быстрое устройство'
							className={cn(cls.review)}
						/>
					</SwiperSlide>
				</Swiper>
				<button className={cn(cls.btn, [cls.prev_btn])}>
					<ActionArrowIcon color='var(--black-100)' className={cn(cls.icon)} />
				</button>
				<button className={cn(cls.btn, [cls.next_btn])}>
					<ActionArrowIcon color='var(--black-100)' className={cn(cls.icon)} />
				</button>
			</div>
		</Container>
	)
}

export { SalesmanInfoReviews }
