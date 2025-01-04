'use client'
import { FC, MouseEventHandler } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import { Button, Input } from '@/components/ui'
import { PlusIcon, SearchIcon } from '@/icons'
import { Action } from '@/components/ui'
import { useModalState } from '@/hooks'
import { SALESMAN_ADD_PRODUCT_MODAL } from '@/constants'
import cls from './index.module.scss'
import { TSalesmanHomePageType } from '../HomePagesSwitcher'

interface Props extends TClassName {
	homePageType: TSalesmanHomePageType
}
const HomeActions: FC<Props> = ({ className, homePageType }) => {
	const showModal = useModalState(state => state.showModal)
	const handleAddProduct: MouseEventHandler = () => {
		showModal({ slug: SALESMAN_ADD_PRODUCT_MODAL })
	}
	const handleAddAdvertisements: MouseEventHandler = () => {}

	const actionContent =
		homePageType === null
			? [
					[
						{ link: '#', text: 'Остановить' },
						{ link: '#', text: 'Архивировать' },
					],
					[
						{ link: '#', text: 'Все товары' },
						{ link: '#', text: 'Активные' },
						{ link: '#', text: 'Остановленные' },
						{ link: '#', text: 'Архивированные' },
					],
			  ]
			: [
					[
						{ link: '#', text: 'Остановить' },
						{ link: '#', text: 'Редактировать' },
						{ link: '#', text: 'Дублировать' },
						{ link: '#', text: 'Архивировать' },
						{ link: '#', text: 'Скопировать ссылку' },
					],
					[
						{ link: '#', text: 'Все объявления' },
						{ link: '#', text: 'Активные' },
						{ link: '#', text: 'Остановленные' },
						{ link: '#', text: 'Архивированные' },
					],
			  ]

	return (
		<>
			{homePageType !== 'ransoms' && (
				<div className={cn(cls.wrapper, [className])}>
					<div className={cn(cls.content)}>
						{/*@ts-ignore*/}
						<Button
							onClick={
								homePageType === null
									? handleAddProduct
									: handleAddAdvertisements
							}
							size='mid'
							theme='fill'
							className={cn(cls.add_btn)}
							beforeIcon={
								<PlusIcon color='var(--white-100)' className={cn(cls.icon)} />
							}
						>
							Добавить {homePageType === null ? 'товар' : 'объявление'}
						</Button>
						<Action
							className={cn(cls.action)}
							actionBtnText='Действия'
							actions={actionContent[0]}
						/>
						<Action
							className={cn(cls.action)}
							actionBtnText='Все товары'
							actions={actionContent[1]}
						/>
					</div>
					<Input
						wrapperCls={cn(cls.inp_wrapper)}
						icon={<SearchIcon color='var(--grey-200)' />}
						placeholder='Поиск'
					/>
				</div>
			)}
		</>
	)
}

export { HomeActions }
