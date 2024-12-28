import {
	AccountIcon,
	CatalogIcon,
	CreditCardIcon,
	DeliveryIcon,
	FavoriteIcon,
	HomeIcon,
	SettingsIcon,
} from '@/icons'
import { ReactNode } from 'react'
import cls from '../GroupItem/index.module.scss'
import { cn } from '@/lib'

export type TAuthLink = {
	link: string
	text: string
	icon: ReactNode
}
export const AUTH_LINKS: TAuthLink[] = [
	{
		link: '/',
		text: 'Главная',
		icon: <HomeIcon className={cls.icon} color='var(--purple-800)' />,
	},
	{
		link: '/fe',
		text: 'Мои заказы',
		icon: <DeliveryIcon className={cls.icon} color='var(--purple-800)' />,
	},
	{
		link: '/fe',
		text: 'Категории',
		icon: <CatalogIcon className={cls.icon} color='var(--purple-800)' />,
	},
	{
		link: '/fe',
		text: 'Избранное',
		icon: (
			<FavoriteIcon
				className={cn(cls.icon, [cls.fill])}
				color='var(--purple-800)'
			/>
		),
	},
	{
		link: '/fe',
		text: 'Финансы',
		icon: <CreditCardIcon className={cls.icon} color='var(--purple-800)' />,
	},
	{
		link: '/account',
		text: 'Профиль',
		icon: <SettingsIcon className={cls.icon} color='var(--purple-800)' />,
	},
]
export const NOT_AUTH_LINKS: TAuthLink[] = [
	{
		link: '/',
		text: 'Главная',
		icon: <HomeIcon className={cls.icon} color='var(--purple-800)' />,
	},
	{
		link: '/fe',
		text: 'Мои заказы',
		icon: <DeliveryIcon className={cls.icon} color='var(--purple-800)' />,
	},
	{
		link: '/fe',
		text: 'Категории',
		icon: <CatalogIcon className={cls.icon} color='var(--purple-800)' />,
	},
	{
		link: '/fe',
		text: 'Избранное',
		icon: (
			<FavoriteIcon
				className={cn(cls.icon, [cls.fill])}
				color='var(--purple-800)'
			/>
		),
	},
	{
		link: '/auth',
		text: 'Вход',
		icon: <AccountIcon className={cls.icon} color='var(--purple-800)' />,
	},
]
