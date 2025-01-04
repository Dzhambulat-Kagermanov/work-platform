import { FC, MouseEventHandler } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import Image from 'next/image'
import { Button, Typography } from '@/components/ui'
import cls from './index.module.scss'
import { useModalState } from '@/hooks'
import { SALESMAN_ADVERTISEMENT_ARCHIVE_MODAL } from '@/constants'

interface Props extends TClassName {}
const FailArchive: FC<Props> = ({ className }) => {
	const hideModal = useModalState(state => state.hideModal)
	const handleClick: MouseEventHandler = () => {
		hideModal({ slug: SALESMAN_ADVERTISEMENT_ARCHIVE_MODAL })
	}

	return (
		<div className={cn(cls.wrapper, [className])}>
			<Image
				src='/images/salesman/home/action-impossible.svg'
				alt='Невозможное действие'
				width={48}
				height={48}
			/>
			<Typography font='Inter-SB' size={18} tag='h2'>
				Невозможно архивировать
			</Typography>
			<Typography font='Inter-R' size={14} tag='h5'>
				Вы не можете отправить объявление в архив, пока по нему есть активные
				выкупы.
			</Typography>
			<Button
				size='mid'
				theme='fill'
				className={cn(cls.btn)}
				wFull
				onClick={handleClick}
			>
				Понятно
			</Button>
		</div>
	)
}

export { FailArchive }
