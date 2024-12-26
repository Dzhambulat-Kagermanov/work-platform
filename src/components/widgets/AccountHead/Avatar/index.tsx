'use client'
import { FC } from 'react'
import { TClassName, TUserInfo } from '@/types'
import { cn } from '@/lib'
import Image from 'next/image'
import { Typography } from '@/components/ui'
import cls from './index.module.scss'

interface Props extends TClassName, Pick<TUserInfo, 'avatarImage' | 'name'> {}
const Avatar: FC<Props> = ({ avatarImage, name, className }) => {
	const handleClick = () => {
		alert('Load avatar')
	}

	return (
		<div
			className={cn(cls.wrapper, [className], {
				[cls.hasAvatar]: !!avatarImage,
			})}
		>
			{avatarImage ? (
				<Image src={avatarImage} alt={name} width={126} height={126} />
			) : (
				<Typography font='Inter-M' size={60} tag='h2'>
					{name
						.split(' ')
						.map(part => {
							return part[0]
						})
						.join('')}
				</Typography>
			)}

			<div className={cn(cls.photo_overlay)} onClick={handleClick}>
				<Image
					src={'/images/shared/camera.svg'}
					alt='Загрузить фото'
					width={32}
					height={32}
				/>
			</div>
		</div>
	)
}

export { Avatar }
