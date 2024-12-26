import { FC } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import { Container } from '@/components/ui'
import { Avatar } from './Avatar'
import { Info } from './Info'
import cls from './index.module.scss'

interface Props extends TClassName {}
const AccountHead: FC<Props> = ({ className }) => {
	return (
		<Container className={cn(cls.container, [className])} tag='section'>
			<Avatar name='Анастасия К.' className={cn(cls.avatar)} />
			<Info
				className={cn(cls.info)}
				id={124321}
				name='Анастасия К.'
				rating={4.7}
				registerDate='19.08.2024'
			/>
		</Container>
	)
}

export { AccountHead }
