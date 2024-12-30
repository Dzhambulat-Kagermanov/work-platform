'use client'
import { FC, MouseEvent, useState } from 'react'
import { TClassName } from '@/types'
import { ModalBasePlaque } from '@/components/ui/ModalBasePlaque'
import { COMPLEX_SORT_MODAL } from '@/constants'
import { cn } from '@/lib'
import { Button, Container } from '@/components/ui'
import { Content as PriceContent } from '../ModalPrice/Content'
import { Content as CashbackContent } from '../ModalCashback/Content'
import { SortContent } from './SortContent'
import cls from './index.module.scss'

interface Props extends TClassName {}
const ModalComplexSort: FC<Props> = ({ className }) => {
	// CASHBACK CONTENT DATA
	const MIN = 0
	const MAX = 100
	const STEPS = 100
	const MIN_BETWEEN_PERCENT = 20
	const MIN_BETWEEN_VALUE = Math.round(MAX / STEPS) * MIN_BETWEEN_PERCENT
	const [range, setRange] = useState<[number, number]>([MIN, MAX])
	// CASHBACK CONTENT DATA

	const handleApply = (e: MouseEvent) => {}
	return (
		<ModalBasePlaque
			slug={COMPLEX_SORT_MODAL}
			className={cn(cls.wrapper, [className])}
		>
			<Container className={cn(cls.content)}>
				<SortContent className={cn(cls.subcontent, [cls.sort_content])} />
				<div className={cn(cls.subcontent, [cls.price_content])}>
					<PriceContent className={cn(cls.price_content)} />
				</div>
				<div className={cn(cls.subcontent, [cls.cashback_content])}>
					<CashbackContent
						sliderInpCls={cn(cls.slider_inp)}
						min={MIN}
						max={MAX}
						minBetweenValue={MIN_BETWEEN_VALUE}
						range={range}
						setRange={setRange}
						steps={STEPS}
					/>
				</div>
				<Button
					theme='fill'
					disabled
					className={cn(cls.apply_btn)}
					onClick={handleApply}
				>
					Применить
				</Button>
			</Container>
		</ModalBasePlaque>
	)
}

export { ModalComplexSort }
