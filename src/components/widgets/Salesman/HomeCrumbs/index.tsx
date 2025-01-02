import { FC } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import { BreadCrumbs } from '@/components/ui'
import cls from './index.module.scss'

interface Props extends TClassName {}
const HomeCrumbs: FC<Props> = ({ className }) => {
	return (
		<div className={cn(cls.wrapper, [className])}>
			<BreadCrumbs
				className={cn(cls.crumbs)}
				items={[
					{ link: '#', text: 'Продвижение' },
					{ link: '#', text: 'Товары' },
				]}
			/>
		</div>
	)
}

export { HomeCrumbs }
