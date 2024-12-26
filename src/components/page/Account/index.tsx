import { FC } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import { AccountHead } from '@/components/widgets/AccountHead'
import cls from './index.module.scss'

interface Props extends TClassName {}
const AccountPage: FC<Props> = ({ className }) => {
	return (
		<main className={cn(cls.account, [className, 'modules-gap-top'])}>
			<AccountHead className={cn(cls.head, ['modules-gap-top'])} />
		</main>
	)
}

export { AccountPage }
