import { FC } from 'react'
import { TClassName, TUserInfo } from '@/types'
import { cn } from '@/lib'
import Image from 'next/image'
import { Typography } from '@/components/ui'
import cls from './index.module.scss'

interface Props
	extends TClassName,
		Pick<TUserInfo, 'rating' | 'id' | 'name' | 'registerDate'> {}
const Info: FC<Props> = ({ className, rating, id, name, registerDate }) => {
	return (
		<div className={cn(cls.wrapper, [className])}>
			<div className={cn(cls.rating)}>
				<Image
					src={'/images/shared/rating/full-star.svg'}
					alt='Рейтинг'
					width={21}
					height={21}
				/>
				<Typography font='Inter-B' size={16}>
					{rating.toFixed(1)}
				</Typography>
			</div>
			<Typography className={cn(cls.name)} size={24} font='Inter-SB' tag='h2'>
				{name}
			</Typography>
			<Typography className={cn(cls.id)} size={14} font='Inter-R' tag='h3'>
				ID {id}
			</Typography>
			<Typography className={cn(cls.date)} size={12} font='Inter-R' tag='h4'>
				Зарегистрирован(а) {registerDate}
			</Typography>
		</div>
	)
}

export { Info }
