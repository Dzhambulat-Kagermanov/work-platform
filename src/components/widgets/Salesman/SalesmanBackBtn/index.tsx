'use client'
import { FC } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import { BackButton, Container } from '@/components/ui'
import { useScreen } from '@/hooks'
import { XS_BIG } from '@/constants'
import cls from './index.module.scss'

interface Props extends TClassName {}
const SalesmanBackBtn: FC<Props> = ({ className }) => {
	const width = useScreen()

	return (
		<>
			{width > XS_BIG && (
				<Container className={cn(cls.wrapper, [className])}>
					<BackButton href='/'>Назад</BackButton>
				</Container>
			)}
		</>
	)
}

export { SalesmanBackBtn }
