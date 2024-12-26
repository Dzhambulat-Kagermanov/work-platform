import { FC } from 'react'
import { TClassName } from '@/types'
import { Button, Input, ModalBase, Typography } from '@/components/ui'
import { HOME_PRICE_MODAL } from '@/constants'
import { cn } from '@/lib'
import cls from './index.module.scss'

interface Props extends TClassName {}
const HomePriceModal: FC<Props> = ({ className }) => {
	return (
		<ModalBase slug={HOME_PRICE_MODAL} className={cn(cls.wrapper, [className])}>
			<div className={cn(cls.content)}>
				<Typography
					tag='h2'
					font='Inter-SB'
					size={18}
					className={cn(cls.title)}
				>
					Цена
				</Typography>
				<div className={cn(cls.inputs)}>
					<Input placeholder='от' />
					<hr />
					<Input placeholder='до' />
				</div>
				<Button size='mid' theme='fill' className={cn(cls.apply_btn)}>
					Применить
				</Button>
			</div>
		</ModalBase>
	)
}

export { HomePriceModal }
