import { FC, MouseEventHandler } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import Image from 'next/image'
import { Button, Typography } from '@/components/ui'
import { PlusIcon } from '@/icons'
import cls from './index.module.scss'

interface Props extends TClassName {
	sidebarIsExpand: boolean
}
const UserInfo: FC<Props> = ({ className, sidebarIsExpand }) => {
	const handleBalanceUp: MouseEventHandler = () => {}
	return (
		<div
			className={cn(cls.wrapper, [className], {
				[cls.sidebarIsExpand]: sidebarIsExpand,
			})}
		>
			<Image
				src='/images/stub/avatar.png'
				alt='Аватар'
				width={45}
				height={45}
			/>
			<div className={cn(cls.content_wrapper)}>
				<div className={cn(cls.content)}>
					<Typography font='Inter-SB' size={16} tag='h2'>
						Анастасия К
					</Typography>
					<Typography font='Inter-R' size={14} tag='h3'>
						+7 977 587 00 00
					</Typography>
					<Typography font='Inter-R' size={14} tag='h4'>
						Баланс: 550 ₽
					</Typography>
					<Button
						size='mid'
						primaryColor='var(--green-100)'
						wFull
						theme='fill'
						className={cn(cls.btn)}
						onClick={handleBalanceUp}
					>
						Пополнить
					</Button>
					<div className={cn(cls.ransoms)}>
						<Typography font='Inter-R' size={12}>
							Выкупы:
						</Typography>
						<Typography font='Inter-R' size={12}>
							84 шт
						</Typography>
						<button className={cn(cls.plus_btn)}>
							<PlusIcon color='var(--grey-300)' />
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export { UserInfo }
