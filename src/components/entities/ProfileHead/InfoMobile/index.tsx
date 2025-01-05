import { FC } from 'react'
import { Container, Typography } from '@/components/ui'
import { cn } from '@/lib'
import Image from 'next/image'
import { TClassName, TUserInfo } from '@/types'
import cls from './index.module.scss'

interface InfoMobileBackgroundProps
	extends TClassName,
		Pick<TUserInfo, 'id' | 'registerDate'> {}
const InfoMobileBackground: FC<InfoMobileBackgroundProps> = ({
	id,
	registerDate,
	className,
}) => {
	return (
		<div className={cn(cls.info_mobile_backg, [className])}>
			<Container className={cn(cls.content)}>
				<Typography font='Inter-R' size={14} tag='h4'>
					ID {id}
				</Typography>
				<Typography font='Inter-R' size={12} tag='time'>
					Дата регистрации: {registerDate}
				</Typography>
			</Container>
		</div>
	)
}

interface InfoMobileContentProps
	extends TClassName,
		Pick<TUserInfo, 'name' | 'rating'> {}
const InfoMobileContent: FC<InfoMobileContentProps> = ({
	name,
	rating,
	className,
}) => {
	return (
		<div className={cn(cls.info_mobile_content, [className])}>
			<Typography font='Inter-SB' size={24} tag='h2'>
				{name}
			</Typography>
			<div className={cn(cls.rating)}>
				<Image
					src={'/images/shared/rating/full-star.svg'}
					alt='Рейтинг'
					width={21}
					height={21}
				/>
				<Typography font='Inter-B' size={16} tag='h5'>
					{rating.toFixed(1)}
				</Typography>
			</div>
		</div>
	)
}

export { InfoMobileBackground, InfoMobileContent }
