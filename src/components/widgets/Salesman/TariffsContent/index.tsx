import { FC } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import { Typography } from '@/components/ui'
import { TariffsItem } from '@/components/entities/TariffsItem'
import { TARIFFS } from './constants'
import cls from './index.module.scss'

interface Props extends TClassName {}
const TariffsContent: FC<Props> = ({ className }) => {
	return (
		<div className={cn(cls.wrapper, [className])}>
			<Typography font='Inter-R' size={16} tag='h2'>
				Приобретайте тарифы с выгодой до 20%
			</Typography>
			<ul className={cn(cls.tariffs)}>
				{TARIFFS.map(({ name, ...other }) => {
					return (
						<TariffsItem
							name={name}
							{...other}
							key={name}
							className={cn(cls.item)}
						/>
					)
				})}
			</ul>
		</div>
	)
}

export { TariffsContent }
