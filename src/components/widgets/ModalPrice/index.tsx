import { FC } from 'react'
import { TClassName } from '@/types'
import { Button, ModalBase } from '@/components/ui'
import { PRICE_MODAL } from '@/constants'
import { cn } from '@/lib'
import { Content } from './Content'
import cls from './index.module.scss'

interface Props extends TClassName {}
const ModalPrice: FC<Props> = ({ className }) => {
	return (
		<ModalBase slug={PRICE_MODAL} className={cn(cls.wrapper, [className])}>
			<div className={cn(cls.content)}>
				<Content />
				<Button size='mid' theme='fill' className={cn(cls.apply_btn)}>
					Применить
				</Button>
			</div>
		</ModalBase>
	)
}

export { ModalPrice }
