import { FC } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import { BackButton, Container } from '@/components/ui'
import { DeliverySidebar } from '@/components/widgets/DeliverySidebar'
import { TChatType } from '@/components/widgets/DeliverySidebar/types'
import { DeliveryContent } from '@/components/widgets/DeliveryContent'
import { BodyFlexColumnStub } from '@/components/widgets/BodyFlexColumnStub'
import cls from './index.module.scss'

interface Props extends TClassName {
	chatType: TChatType
}
const DeliveryPage: FC<Props> = ({ className, chatType }) => {
	return (
		<main className={cn(cls.delivery, [className])}>
			<BodyFlexColumnStub />
			<Container className={cn(cls.container, ['modules-gap-bottom'])}>
				<BackButton
					href='/'
					className={cn(cls.back_btn, [
						'modules-gap-bottom',
						'modules-gap-top',
					])}
				>
					Назад
				</BackButton>
				<div className={cn(cls.complex)}>
					<DeliverySidebar className={cn(cls.sidebar)} chatType={chatType} />
					<DeliveryContent className={cn(cls.content)} />
				</div>
			</Container>
		</main>
	)
}

export { DeliveryPage }
