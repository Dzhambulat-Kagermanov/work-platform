import { FC } from 'react'
import { TClassName, TState } from '@/types'
import { cn } from '@/lib'
import Image from 'next/image'
import { HeadAreaSalesmanInfo } from '../HeadAreaSalesmanInfo'
import { HeadAreaOrderInfo } from '../HeadAreaOrderInfo'
import { HeadAreaBackBtn } from '../HeadAreaBackBtn'
import cls from './index.module.scss'

interface Props extends TClassName {
	setActiveSTUB: TState<number | undefined>
}
const HeadArea: FC<Props> = ({ className, setActiveSTUB }) => {
	return (
		<div className={cn(cls.wrapper, [className])}>
			<div className={cn(cls.content)}>
				<HeadAreaBackBtn
					className={cn(cls.back_btn)}
					setActiveSTUB={setActiveSTUB}
				/>
				<Image
					src={'/images/stub/avatar.png'}
					width={70}
					height={70}
					alt='Аватар'
				/>
				<HeadAreaSalesmanInfo className={cn(cls.salesman_info)} />
			</div>
			<HeadAreaOrderInfo className={cn(cls.order_info)} />
		</div>
	)
}

export { HeadArea }
