'use client'
import { FC, useState } from 'react'
import { TClassName } from '@/shared/types'
import { cn } from '@/shared/lib'
import { ActionArrowIcon } from '@/shared/icons'
import Image from 'next/image'
import cls from './index.module.scss'

interface Props extends TClassName {
	images: string[]
}
const Gallery: FC<Props> = ({ className, images }) => {
	const [active, setActive] = useState<string>(images[0])
	const imagesForRender =
		images.length >= 3
			? images
			: [
					...images,
					...[...Array(3 - images.length)].map(() => {
						return null
					}),
			  ]

	return (
		<div className={cn(cls.wrapper, [className])}>
			<div className={cn(cls.scrollbar)}>
				{imagesForRender.map(image => {
					if (image === null) {
						return <div className={cn(cls.stub)} />
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
			<button className={cn(cls.next_images)}>
				<ActionArrowIcon color='var(--purple-500)' />
			</button>
		</div>
	)
}

export { Gallery }
