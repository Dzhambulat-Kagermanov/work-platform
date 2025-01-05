'use client'
import { FC, MouseEventHandler } from 'react'
import { TClassName, TTag } from '@/types'
import { cn } from '@/lib'
import { TTariffsItemProps } from '@/types/salesman/tariffs'
import { Button, DiscountPlaque, Typography } from '@/components/ui'
import Image from 'next/image'
import { useModalState } from '@/hooks'
import { SALESMAN_TARIFFS_MODAL } from '@/constants'
import cls from './index.module.scss'

interface Props extends TClassName, TTag, TTariffsItemProps {}
const TariffsItem: FC<Props> = ({
	className,
	advantages,
	duration,
	name,
	price,
	ransoms: { priceForOne, qnt },
	tag = 'div',
}) => {
	const showModal = useModalState(state => state.showModal)
	const handleClick: MouseEventHandler = () => {
		showModal({
			slug: SALESMAN_TARIFFS_MODAL,
		})
	}
	const Tag = tag
	return (
		<Tag className={cn(cls.wrapper, [className])}>
			<div className={cn(cls.head)}>
				<Typography font='Inter-M' size={20} tag='h2'>
					{name}
				</Typography>
				<DiscountPlaque customColor='blue' customContent={val => val + ''}>
					{duration}
				</DiscountPlaque>
			</div>
			<ul className={cn(cls.advantages)}>
				{advantages.map((el, idx) => {
					return (
						<li className={cn(cls.item)} key={idx + '/'}>
							<Image
								src={'/images/delivery/confirm-action.svg'}
								alt='Преимущество'
								width={18}
								height={18}
							/>
							<Typography font='Inter-R' size={12}>
								{el}
							</Typography>
						</li>
					)
				})}
			</ul>
			<div className={cn(cls.price)}>
				<Typography font='Inter-M' size={16} tag='h2'>
					{qnt} шт.
				</Typography>
				<Typography font='Inter-R' size={10} tag='h3'>
					{priceForOne}₽ / за выкуп товара
				</Typography>
			</div>
			<div className={cn(cls.footer)}>
				<Typography font='Inter-M' size={16}>
					{price} ₽
				</Typography>
				<Button
					size='low'
					theme='fill'
					className={cn(cls.btn)}
					onClick={handleClick}
				>
					Купить
				</Button>
			</div>
		</Tag>
	)
}

export { TariffsItem }
