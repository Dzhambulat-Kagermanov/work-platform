import { FC } from 'react'
import { TClassName, TSalesmanStatistic } from '@/types'
import { cn } from '@/lib'
import { AccountContentBlock } from '@/components/ui'
import { AccountStatisticItem } from '@/components/entities/AccountStatisticItem'
import cls from './index.module.scss'

interface Props extends TClassName, TSalesmanStatistic {}
const AccountStatistic: FC<Props> = ({
	className,
	cashbackPaid,
	productsGrate,
	productsRating,
	successfulBuybacks,
}) => {
	return (
		<AccountContentBlock
			tag='section'
			title='Статистика'
			className={cn(cls.wrapper, [className])}
			contentWrapperCls={cn(cls.content)}
			contentWrapperTag='ul'
		>
			<AccountStatisticItem
				subtitle={'Успешных выкупов'}
				title={`${cashbackPaid} ₽`}
				className={cn(cls.item)}
				contentCls={cn(cls.item_content)}
				tag='li'
				isTitleGreen
			/>
			<AccountStatisticItem
				subtitle={'Кэшбека выплачено'}
				title={`${successfulBuybacks}%`}
				className={cn(cls.item)}
				contentCls={cn(cls.item_content)}
				tag='li'
			/>
			<AccountStatisticItem
				subtitle={'Оценок товаров'}
				title={`${productsGrate}`}
				className={cn(cls.item)}
				contentCls={cn(cls.item_content)}
				tag='li'
			/>
			<AccountStatisticItem
				subtitle={'Рейтинг товаров'}
				title={`${productsRating}`}
				className={cn(cls.item)}
				contentCls={cn(cls.item_content)}
				tag='li'
				isTitleGreen
			/>
		</AccountContentBlock>
	)
}

export { AccountStatistic }
