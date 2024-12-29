'use client'
import { FC } from 'react'
import cls from './index.module.scss'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import { ExpandArrowIcon } from '@/icons'
import { Container, Typography } from '@/components/ui'
import { useRouter } from 'next/navigation'

interface Props extends TClassName {}
const SalesmanInfoBackBtn: FC<Props> = ({ className }) => {
	const router = useRouter()
	const handleClick = () => {
		router.push('/')
	}

	return (
		<Container className={cn(cls.wrapper)}>
			<button className={cn(cls.btn, [className])} onClick={handleClick}>
				<ExpandArrowIcon
					color='var(--black-opacity-60)'
					className={cn(cls.icon)}
				/>
				<Typography tag='h4' font='Inter-R' size={16}>
					Назад
				</Typography>
			</button>
		</Container>
	)
}

export { SalesmanInfoBackBtn }
