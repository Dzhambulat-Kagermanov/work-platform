import { FC } from 'react'
import { TClassName } from '@/types'
import { ModalBase } from '@/components/ui'
import { HOME_SORT_MODAL } from '@/constants'
import { cn } from '@/lib'
import cls from './index.module.scss'

interface Props extends TClassName {}
const HomeSortModal: FC<Props> = ({ className }) => {
	return (
		<ModalBase slug={HOME_SORT_MODAL} className={cn(cls.wrapper, [className])}>
			3
		</ModalBase>
	)
}

export { HomeSortModal }
