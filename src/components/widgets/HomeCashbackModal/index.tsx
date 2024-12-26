import { FC } from 'react'
import { TClassName } from '@/types'
import { ModalBase } from '@/components/ui'
import { HOME_CASHBACK_MODAL } from '@/constants'
import { cn } from '@/lib'
import cls from './index.module.scss'

interface Props extends TClassName {}
const HomeCashbackModal: FC<Props> = ({ className }) => {
	return (
		<ModalBase
			slug={HOME_CASHBACK_MODAL}
			className={cn(cls.wrapper, [className])}
		>
			2
		</ModalBase>
	)
}

export { HomeCashbackModal }
