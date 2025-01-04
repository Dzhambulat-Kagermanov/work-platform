import { FC } from 'react'
import { TSalesmanTableAdvertisement, TSalesmanTableProduct } from '@/types'
import { Checkbox, DiscountPlaque, Toggle, Typography } from '@/components/ui'
import { cn } from '@/lib'
import Image from 'next/image'
import cls from './index.module.scss'

interface Props extends TSalesmanTableAdvertisement {
	columnCls?: string
}
const AdvertisementsTableBodyItem: FC<Props> = ({
	id,
	advertisement,
	balance,
	cashback: { money, percent },
	inFavorite,
	inTransactions,
	CTR,
	product: { image, name, number },
	ransoms,
	ransomsQnt,
	views,
	defaultStatusValue,
	columnCls,
}) => {
	return (
		<>
			{/* ОБЪЯВЛЕНИЕ */}
			<td className={cn(cls.column, [cls.advertisement, columnCls])}>
				<div className={cn(cls.advertisement_content)}>
					<Checkbox
						className={cn(cls.checkbox)}
						defaultChecked={advertisement.defaultCheckboxValue}
					/>
					<div className={cn(cls.info)}>
						<Typography font='Inter-M' tag='h2' size={14}>
							{advertisement.name}
						</Typography>
						<Typography font='Inter-R' tag='time' size={14}>
							{advertisement.date}
						</Typography>
					</div>
				</div>
			</td>
			{/* СТАТУС */}
			<td className={cn(cls.column, [cls.status, columnCls])}>
				<Toggle
					className={cn(cls.toggle)}
					defaultChecked={defaultStatusValue}
				/>
			</td>
			{/* ТОВАР */}
			<td className={cn(cls.column, [cls.product, columnCls])}>
				<div className={cn(cls.product_content)}>
					<Image src={image} alt='product' width={40} height={40} />
					<div className={cn(cls.content)}>
						<Typography font='Inter-R' tag='h2' size={14}>
							{name}
						</Typography>
						<Typography font='Inter-R' tag='h3' size={14}>
							{number}
						</Typography>
					</div>
				</div>
			</td>
			{/* КЭШБЕК */}
			<td className={cn(cls.column, [cls.cashback, columnCls])}>
				<DiscountPlaque customContent={num => `${num}%`}>
					{percent}
				</DiscountPlaque>
				<DiscountPlaque customContent={num => `${num} Р`} customColor={'blue'}>
					{money}
				</DiscountPlaque>
			</td>
			{/* ВЫКУПЫ */}
			<td className={cn(cls.column, [cls.ransoms, columnCls])}>
				<Typography font='Inter-R' size={14} tag='h4'>
					{ransoms[0]}шт. / {ransoms[1]}шт.
				</Typography>
			</td>
			{/* БАЛАНС */}
			<td className={cn(cls.column, [cls.balance, columnCls])}>
				<Typography font='Inter-R' size={14}>
					{balance} P
				</Typography>
			</td>
			{/* В ТРАНЗАКЦИЯХ */}
			<td className={cn(cls.column, [cls.in_transactions, columnCls])}>
				<Typography font='Inter-R' size={14}>
					{inTransactions} P
				</Typography>
			</td>
			{/* ПРОСМОТРЫ */}
			<td className={cn(cls.column, [cls.view, columnCls])}>
				<Typography font='Inter-R' size={14} tag='h3'>
					{views}
				</Typography>
			</td>
			{/* В ИЗБРАННОМ */}
			<td className={cn(cls.column, [cls.in_favorite, columnCls])}>
				<Typography font='Inter-R' size={14}>
					{inFavorite} P
				</Typography>
			</td>
			{/* ВЫКУПЫ КОЛ-ВО */}
			<td className={cn(cls.column, [cls.ransoms_qnt, columnCls])}>
				<Typography font='Inter-R' size={14} tag='h3'>
					{ransomsQnt}
				</Typography>
			</td>
			{/* CTR */}
			<td className={cn(cls.column, [cls.ctr, columnCls])}>
				<Typography font='Inter-R' size={14} tag='h3'>
					{CTR}%
				</Typography>
			</td>
		</>
	)
}

export { AdvertisementsTableBodyItem }
