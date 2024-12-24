import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { cn } from '@/shared/lib'
import { Typography } from '../Typography'
import { starsPosition } from './lib/starsPosition'
import cls from './index.module.scss'

interface Props extends TClassName {
	rating: number
}
const Ratingbar: FC<Props> = ({ rating, className }) => {
	const { expandedRating, ratingPositions } = starsPosition(rating)

	return (
		<div className={cn(cls.rating, [className])}>
			<ul className={cn(cls.stars)}>
				{ratingPositions.map((el, index) => {
					switch (el) {
						case 'full':
							return (
								<li className={cn(cls.star, [cls.full])} key={index}>
									<img
										src={'/images/shared/rating/full-star.svg'}
										alt='Полная звезда'
									/>
								</li>
							)
						case 'half':
							return (
								<li className={cn(cls.star, [cls.half])} key={index}>
									<img
										src={'/images/shared/rating/half-star.svg'}
										alt='Половина звезды'
									/>
								</li>
							)
						case 'empty':
							return <li className={cn(cls.star, [cls.empty])} key={index} />
					}
				})}
			</ul>
			<Typography font='Inter-R' size={16}>
				{expandedRating}
			</Typography>
		</div>
	)
}

export { Ratingbar }
