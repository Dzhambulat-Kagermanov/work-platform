import { FC } from 'react'
import { TClassName, TTag } from '@/types'
import { cn } from '@/lib'
import Image from 'next/image'
import { OpenReviewModalInChat } from '@/components/features/OpenReviewModalInChat'
import cls from './index.module.scss'

interface Props extends TClassName, TTag {}
const MessagesAreaReviewCreating: FC<Props> = ({ className, tag = 'div' }) => {
	const Tag = tag

	return (
		<Tag className={cn(cls.wrapper, [className])}>
			<div className={cn(cls.rating)}>
				<Image
					src={'/images/shared/rating/empty-star.svg'}
					width={30}
					height={30}
					alt='Рейтинг'
				/>
				<Image
					src={'/images/shared/rating/empty-star.svg'}
					width={30}
					height={30}
					alt='Рейтинг'
				/>
				<Image
					src={'/images/shared/rating/empty-star.svg'}
					width={30}
					height={30}
					alt='Рейтинг'
				/>
				<Image
					src={'/images/shared/rating/empty-star.svg'}
					width={30}
					height={30}
					alt='Рейтинг'
				/>
				<Image
					src={'/images/shared/rating/empty-star.svg'}
					width={30}
					height={30}
					alt='Рейтинг'
				/>
			</div>
			<OpenReviewModalInChat className={cn(cls.open_modal_btn)} />
		</Tag>
	)
}

export { MessagesAreaReviewCreating }
