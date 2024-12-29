import { FC } from 'react'
import { TClassName } from '@/types'
import { Container, Typography } from '@/components/ui'
import { cn } from '@/lib'
import cls from './index.module.scss'

interface Props extends TClassName {}
const FavoritesHead: FC<Props> = ({ className }) => {
	return (
		<Container className={cn(cls.wrapper, [className])}>
			<Typography font='Inter-SB' size={24} tag='h1'>
				Избранное
			</Typography>
			<Typography font='Inter-R' size={14} tag='h2'>
				3 товара
			</Typography>
		</Container>
	)
}

export { FavoritesHead }
