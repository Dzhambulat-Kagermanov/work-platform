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

interface Props extends TClassName {}
const HomeActions: FC<Props> = ({ className }) => {
	const showModal = useModalState(state => state.showModal)
	const handleAddProduct: MouseEventHandler = () => {
		showModal({ slug: SALESMAN_ADD_PRODUCT_MODAL })
	}

	return (
		<div className={cn(cls.wrapper, [className])}>
			<div className={cn(cls.content)}>
				<Button
					onClick={handleAddProduct}
					size='mid'
					theme='fill'
					className={cn(cls.add_btn)}
					beforeIcon={
						<PlusIcon color='var(--white-100)' className={cn(cls.icon)} />
					}
				>
					Добавить товар
				</Button>
				<Action
					className={cn(cls.action)}
					actionBtnText='Действия'
					actions={[
						{ link: '#', text: 'Остановить' },
						{ link: '#', text: 'Архивировать' },
					]}
				/>
				<Action
					className={cn(cls.action)}
					actionBtnText='Все товары'
					actions={[
						{ link: '#', text: 'Все товары' },
						{ link: '#', text: 'Активные' },
						{ link: '#', text: 'Остановленные' },
						{ link: '#', text: 'Архивированные' },
					]}
				/>
			</div>
			<Input
				wrapperCls={cn(cls.inp_wrapper)}
				icon={<SearchIcon color='var(--grey-200)' />}
				placeholder='Поиск'
			/>
		</div>
	)
}

export { HomeActions }
