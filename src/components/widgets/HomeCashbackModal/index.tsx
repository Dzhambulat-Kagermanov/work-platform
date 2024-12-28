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
				<Typography font='Inter-SB' size={18} tag='h2'>
					Размер кэшбека
				</Typography>
				<div className={cn(cls.inputs)}>
					<Input
						onChange={e => {}}
						tabIndex={1000}
						value={range !== undefined ? `от ${range[0]}%` : `от 0%`}
						onBlur={() => {}}
					/>
					<hr />
					<Input
						onChange={e => {}}
						tabIndex={1000}
						value={range !== undefined ? `до ${range[1]}%` : `до 0%`}
						onBlur={() => {}}
					/>
				</div>
				<SliderInput
					className={cn(cls.slider_inp)}
					min={MIN}
					max={MAX}
					steps={STEPS}
					setValue={setRange}
					value={range}
					minBetweenValue={MIN_BETWEEN_VALUE}
					visibleValueMax={minValue => {
						return (
							<Typography font='Inter-M' size={16} tag='h5'>
								{minValue}%
							</Typography>
						)
					}}
					visibleValueMin={minValue => {
						return (
							<Typography font='Inter-M' size={16} tag='h5'>
								{minValue}%
							</Typography>
						)
					}}
				/>
				<Button theme='fill' size='mid' className={cn(cls.apply_btn)}>
					Применить
				</Button>
			</div>
		</ModalBase>
	)
}

export { HomeCashbackModal }
