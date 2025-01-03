import { FC, InputHTMLAttributes } from 'react'
import { TClassName } from '@/types'
import { cn } from '@/lib'
import cls from './index.module.scss'

interface Props
	extends TClassName,
		Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {}
const Toggle: FC<Props> = ({ className, ...other }) => {
	return (
		<div className={cn(cls.toggle, [className])}>
			<label className={cn(cls.toggle_label)}>
				<input
					type='checkbox'
					className={cn(cls.toggle_input, [className])}
					{...other}
				/>
			</label>
		</div>
	)
}

export { Toggle }
