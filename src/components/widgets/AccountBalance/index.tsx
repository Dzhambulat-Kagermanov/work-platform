import { FC } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import { AccountContentBlock, Typography } from '@/components/ui'
import { AccountBalanceMore } from '@/components/features/AccountBalanceMore'
import cls from './index.module.scss'

interface Props extends TClassName {
	balance: number
}
const AccountBalance: FC<Props> = ({ className, balance }) => {
	return (
		<AccountContentBlock
			tag='section'
			title='Баланс'
			className={cn(cls.wrapper, [className])}
			contentWrapperCls={cn(cls.content)}
		>
			<Typography font='Inter-SB' size={24}>
				{balance} ₽
			</Typography>
			<AccountBalanceMore className={cn(cls.more_btn)} />
		</AccountContentBlock>
	)
}

export { AccountBalance }
