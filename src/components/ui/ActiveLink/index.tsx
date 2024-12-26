'use client'
import { FC } from 'react'
import { TChildren, TClassName } from '@/types'
import { cn } from '@/lib'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Props extends TClassName, TChildren {
	href: string
	activeCls: string
}
const ActiveLink: FC<Props> = ({ children, className, href, activeCls }) => {
	const path = usePathname()

	return (
		<Link
			href={href}
			className={cn(
				'',
				[className],
				activeCls ? { [activeCls]: path === href } : {}
			)}
		>
			{children}
		</Link>
	)
}

export { ActiveLink }
