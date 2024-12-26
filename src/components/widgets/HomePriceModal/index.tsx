import { FC } from 'react'
import { TClassName } from '@/types'
import { ModalBase } from '@/components/ui'
import { HOME_PRICE_MODAL } from '@/constants'
import { cn } from '@/lib'
import cls from './index.module.scss'

interface Props extends TClassName {}
const HomePriceModal: FC<Props> = ({ className }) => {
	return (
		<ModalBase slug={HOME_PRICE_MODAL} className={cn(cls.wrapper, [className])}>
			1
		</ModalBase>
	)
}

export { HomePriceModal }
