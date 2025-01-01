'use client'
import { FC, useState } from 'react'
import { MaskInput, TMaskInputProps } from '../MaskInput'
import { cn } from '@/lib'
import { Dropdown } from '../Dropdown'
import { Typography } from '../Typography'
import cls from './index.module.scss'

interface Props extends Omit<TMaskInputProps, 'icon' | 'mask'> {
	masks: Record<string, string>
	switchCls?: string
}
const InputMaskSwitcher: FC<Props> = ({ masks, switchCls, ...other }) => {
	const keys = Object.keys(masks)
	const [mask, setMask] = useState<string>(keys[0])

	return (
		<MaskInput
			mask={masks[mask]}
			contentCls={cn(cls.inp_content)}
			icon={
				<Dropdown
					setActiveItem={({ value }) => {
						setMask(value as string)
					}}
					itemCls={cn(cls.switcher_item)}
					contentCls={cn(cls.switcher_content)}
					isExpandCls={cn(cls.switcher_expand)}
					activeItemCls={cn(cls.switcher_active_area)}
					wrapperCls={cn(cls.switcher, [switchCls])}
					defaultActiveValue={keys[0]}
					items={keys.map(mask => {
						return {
							content: (
								<Typography
									font='Inter-R'
									size={16}
									className={cn(cls.switcher_item_text)}
								>
									{mask}
								</Typography>
							),
							value: mask,
						}
					})}
				/>
			}
			{...other}
		/>
	)
}

export { InputMaskSwitcher }
