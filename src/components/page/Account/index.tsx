import { FC } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import { AccountHead } from '@/components/widgets/AccountHead'
import { AccountForm } from '@/components/widgets/AccountForm'
import cls from './index.module.scss'
import { Container } from '@/components/ui'

interface Props extends TClassName {}
const AccountPage: FC<Props> = ({ className }) => {
	return (
		<main className={cn(cls.account, [className, 'modules-gap-top'])}>
			<AccountHead className={cn(cls.head, ['modules-gap-top'])} />
			<Container className={cn(cls.dashboard)}>
				<AccountForm className={cn(cls.form)} />
			</Container>
		</main>
	)
}

export { AccountPage }
