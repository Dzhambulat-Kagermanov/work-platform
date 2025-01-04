import { FC } from 'react'
import cls from './index.module.scss'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import { RansomsChatOrderInfoModal } from '../RansomsChatOrderInfoModal'
import { RansomsContent } from '../RansomsContent'
import { RansomsSidebar } from '../RansomsSidebar'
import { TChatType } from '../RansomsSidebar/types'

interface Props extends TClassName {
	chatType: TChatType
}
const HomeRansomsContent: FC<Props> = ({ className, chatType }) => {
	return (
		<div className={cn(cls.wrapper, [className])}>
			<div className={cn(cls.complex, ['modules-gap-top'])}>
				<RansomsSidebar className={cn(cls.sidebar)} chatType={chatType} />
				<RansomsContent className={cn(cls.content)} chatType={chatType} />
			</div>
			<RansomsChatOrderInfoModal className={cn(cls.order_info_modal)} />
		</div>
	)
}

export { HomeRansomsContent }
