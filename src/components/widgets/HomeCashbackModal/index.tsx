'use client'
import { FC, useState } from 'react'
import { TClassName } from '@/types'
import {
	Button,
	Input,
	ModalBase,
	SliderInput,
	Typography,
} from '@/components/ui'
import { HOME_CASHBACK_MODAL } from '@/constants'
import { cn } from '@/lib'
import cls from './index.module.scss'
import { Content } from './Content'

interface Props extends TClassName {}
const HomeCashbackModal: FC<Props> = ({ className }) => {
	const MIN = 0
	const MAX = 100
	const STEPS = 100

	const MIN_BETWEEN_PERCENT = 20
	const MIN_BETWEEN_VALUE = Math.round(MAX / STEPS) * MIN_BETWEEN_PERCENT

	const [range, setRange] = useState<[number, number]>([MIN, MAX])

	return (
		<ModalBase
			slug={HOME_CASHBACK_MODAL}
			className={cn(cls.wrapper, [className])}
		>
			<div className={cn(cls.content)}>
				<Content
					max={MAX}
					min={MIN}
					minBetweenValue={MIN_BETWEEN_VALUE}
					range={range}
					setRange={setRange}
					steps={STEPS}
				/>
				<Button theme='fill' size='mid' className={cn(cls.apply_btn)}>
					Применить
				</Button>
			</div>
		</ModalBase>
	)
}

export { HomeCashbackModal }
