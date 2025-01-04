import { FC } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import { Input, Typography } from '@/components/ui'
import { CreateAdvertisementCardInfo } from '@/components/widgets/Salesman/CreateAdvertisementCardInfo'
import { CreateAdvertisementCashback } from '@/components/widgets/Salesman/CreateAdvertisementCashback'
import { CreateAdvertisementEditArea } from '@/components/widgets/Salesman/CreateAdvertisementEditArea'
import { CreateAdvertisementRansomsQnt } from '@/components/widgets/Salesman/CreateAdvertisementRansomsQnt'
import cls from './index.module.scss'
import { CreateAdvertisementResult } from '@/components/widgets/Salesman/CreateAdvertisementResult'

interface Props extends TClassName {}
const CreateAdvertisementPage: FC<Props> = ({ className }) => {
	return (
		<div className={cn(cls.main, [className])}>
			<Typography font='Inter-SB' size={30} tag='h1'>
				Создание объявления
			</Typography>
			<Typography font='Inter-R' size={16} tag='h2'>
				После успешной публикации ваш товар появится на сайте и будет доступен
				для заказа
			</Typography>
			<div className={cn(cls.content)}>
				<CreateAdvertisementCardInfo className={cn(cls.card_wrapper)} />
				<Input
					wrapperCls={cn(cls.name_inp_wrapper)}
					label='Название объявления (видите только вы)'
				/>
				<CreateAdvertisementCashback className={cn(cls.cashback)} />
				<CreateAdvertisementEditArea className={cn(cls.edit_area)} />
				<CreateAdvertisementRansomsQnt className={cn(cls.ransoms_qnt)} />
				<CreateAdvertisementResult className={cn(cls.result)} />
			</div>
		</div>
	)
}

export { CreateAdvertisementPage }
