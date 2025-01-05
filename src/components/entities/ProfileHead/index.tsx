'use client'
import { CSSProperties, FC } from 'react'
import { TClassName, TUserInfo } from '@/types'
import { cn } from '@/lib'
import { Container } from '@/components/ui'
import { Avatar } from './Avatar'
import { Info } from './Info'
import { useScreen } from '@/hooks'
import { XS_BIG } from '@/constants'
import { InfoMobileBackground, InfoMobileContent } from './InfoMobile'
import cls from './index.module.scss'

interface Props
	extends TClassName,
		Omit<TUserInfo, 'balance' | 'email' | 'phoneNumber' | ''> {
	withoutAvatarChange?: boolean
	infoMobileContentCls?: string
}
const ProfileHead: FC<Props> = ({
	className,
	withoutAvatarChange,
	id,
	name,
	rating,
	registerDate,
	avatarImage,
	infoMobileContentCls,
	background,
}) => {
	const width = useScreen()

	return (
		<section
			className={cn(cls.wrapper)}
			style={
				{
					'--backgroundImage': `url("${
						background || '/images/account/head-background.png'
					}")`,
				} as CSSProperties
			}
		>
			{width <= XS_BIG && (
				<InfoMobileBackground
					className={cn(cls.info_mobile_backg)}
					id={id}
					registerDate={registerDate}
				/>
			)}
			<Container className={cn(cls.container, [className])}>
				<Avatar
					avatarImage={avatarImage}
					name={name}
					className={cn(cls.avatar)}
					withoutAvatarChange={withoutAvatarChange}
				/>
				{width > XS_BIG && (
					<Info
						className={cn(cls.info)}
						id={id}
						name={name}
						rating={rating}
						registerDate={registerDate}
					/>
				)}
				{width <= XS_BIG && (
					<InfoMobileContent
						className={cn(cls.info_mobile_content, [infoMobileContentCls])}
						name={name}
						rating={rating}
					/>
				)}
			</Container>
		</section>
	)
}

export { ProfileHead }
