import { FC } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import { Item } from './Item'
import { TChatType } from './types'
import cls from './index.module.scss'

interface Props extends TClassName {
	chatType?: TChatType
}
const DeliverySidebar: FC<Props> = ({ className, chatType }) => {
	return (
		<aside className={cn(cls.wrapper, [className])}>
			<div className={cn(cls.overlay)}>
				<div className={cn(cls.nav_wrapper)}>
					<nav className={cn(cls.nav)}>
						<Item
							messageQnt={10}
							type={undefined}
							className={cn(cls.item)}
							activeType={chatType}
						>
							Все чаты
						</Item>
						<Item
							messageQnt={10}
							type='waitingOrder'
							className={cn(cls.item)}
							activeType={chatType}
						>
							Ожидание заказа
						</Item>
						<Item
							messageQnt={10}
							type='waitingReceive'
							className={cn(cls.item)}
							activeType={chatType}
						>
							Ожидание получения товара
						</Item>
						<Item
							messageQnt={10}
							type='confirmation'
							className={cn(cls.item)}
							activeType={chatType}
						>
							Подтверждение
						</Item>
						<Item
							messageQnt={10}
							type='cashbackReceived'
							className={cn(cls.item)}
							activeType={chatType}
						>
							Кэшбек получен
						</Item>
						<Item
							messageQnt={10}
							type='canceled'
							className={cn(cls.item)}
							activeType={chatType}
						>
							Отменен
						</Item>
						<Item
							messageQnt={10}
							type='archive'
							className={cn(cls.item)}
							activeType={chatType}
						>
							Архив
						</Item>
					</nav>
				</div>
			</div>
		</aside>
	)
}

export { DeliverySidebar }
