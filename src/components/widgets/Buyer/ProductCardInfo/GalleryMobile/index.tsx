'use client'
import { FC } from 'react'
import { TClassName, TProductItemProps } from '@/types'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import { Autoplay, Pagination } from 'swiper/modules'
import { cn } from '@/lib'
import Image from 'next/image'
import cls from './index.module.scss'

interface Props
	extends TClassName,
		Pick<TProductItemProps, 'images' | 'isFavorite'> {}
const GalleryMobile: FC<Props> = ({ className, images, isFavorite }) => {
	return (
		<div className={cn(cls.wrapper, [className])}>
			<Swiper
				id='productsPage-gallery-mobile'
				loop
				className={cn(cls.slider)}
				slidesPerView={1}
				modules={[Autoplay, Pagination]}
				speed={800}
				pagination={{
					enabled: true,
					clickable: true,
					el: `.${cls.slider_pagination}`,
				}}
				autoplay={{
					delay: 2000,
				}}
			>
				{images.map(image => {
					return (
						<SwiperSlide key={image} className={cn(cls.item)}>
							<Image src={image} alt='Продукт' width={360} height={475} />
						</SwiperSlide>
					)
				})}
			</Swiper>
			<div className={cn(cls.pagination_wrapper)}>
				<div className={cn(cls.slider_pagination)}></div>
			</div>
		</div>
	)
}

export { GalleryMobile }
