'use client'
import { FC, memo, useState } from 'react'
import { TClassName, TProductItemProps } from '@/shared/types'
import { cn } from '@/shared/lib'
import { ActionArrowIcon } from '@/shared/icons'
import Image from 'next/image'
import cls from './index.module.scss'

interface Props
	extends TClassName,
		Pick<TProductItemProps, 'images' | 'isFavorite'> {}
const Gallery: FC<Props> = memo(({ className, images }) => {
	const MAX_ITEMS_SCROLLBAR = 3
	const [active, setActive] = useState<string>(images[0])
	const imagesForRender =
		images.length >= MAX_ITEMS_SCROLLBAR
			? images
			: [
					...images,
					...[...Array(MAX_ITEMS_SCROLLBAR - images.length)].map(() => {
						return null
					}),
			  ]

	return (
		<section
			className={cn(cls.wrapper, [className], {
				[cls.hasNextBtn]: imagesForRender.length > MAX_ITEMS_SCROLLBAR,
			})}
		>
			<div className={cn(cls.scrollbar)}>
				{imagesForRender.map((image, index) => {
					if (image === null) {
						return <div className={cn(cls.stub, [cls.item])} key={index} />
					}
					return (
						<button
							className={cn(cls.item)}
							onClick={() => {
								setActive(image)
							}}
							key={image}
						>
							<Image width={126} height={167} src={image} alt='Продукт' />
						</button>
					)
				})}
			</div>
			<div className={cn(cls.active)}>
				<Image src={active} alt='Продукт' width={400} height={530} />
			</div>
			{imagesForRender.length > MAX_ITEMS_SCROLLBAR && (
				<button className={cn(cls.next_images)}>
					<ActionArrowIcon color='var(--purple-500)' />
				</button>
			)}
		</section>
	)
})

export { Gallery }
