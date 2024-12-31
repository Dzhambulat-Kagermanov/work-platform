import { FC } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import { Typography } from '../Typography'
import { starsPosition } from './lib/starsPosition'
import cls from './index.module.scss'
import Image from 'next/image'

interface Props extends TClassName {
	rating: number
	withoutNum?: boolean
}
const Ratingbar: FC<Props> = ({ rating, withoutNum, className }) => {
	const { expandedRating, ratingPositions } = starsPosition(rating)

	return (
		<div className={cn(cls.rating, [className])}>
			<ul className={cn(cls.stars)}>
				{ratingPositions.map((el, index) => {
					switch (el) {
						case 'full':
							return (
								<li className={cn(cls.star, [cls.full])} key={index}>
									<Image
										src={'/images/shared/rating/full-star.svg'}
										alt='Полная звезда'
										width={18}
										height={18}
									/>
								</li>
							)
						case 'half':
							return (
								<li className={cn(cls.star, [cls.half])} key={index}>
									<Image
										src={'/images/shared/rating/half-star.svg'}
										alt='Половина звезды'
										width={18}
										height={18}
									/>
								</li>
							)
						case 'empty':
							return (
								<li className={cn(cls.star, [cls.empty])} key={index}>
									<Image
										src={'/images/shared/rating/empty-star.svg'}
										alt='Пустая звезды'
										width={18}
										height={18}
									/>
								</li>
							)
					}
				})}
			</ul>
			{!withoutNum && (
				<Typography font='Inter-R' size={16}>
					{expandedRating}
				</Typography>
			)}
		</div>
	)
}

export { Ratingbar }
