import { FC } from 'react'
import { TIcon } from '@/types'

interface Props extends TIcon {}
const ActionArrowIcon: FC<Props> = ({ color, className }) => {
	return (
		<svg
			className={className}
			width='42'
			height='42'
			viewBox='0 0 42 42'
			fill='none'
		>
			<path
				d='M13 21L21 29M21 29L29 21M21 29L21 13M21 41C9.9543 41 1 32.0457 1 21C1 9.9543 9.9543 1 21 1C32.0457 1 41 9.9543 41 21C41 32.0457 32.0457 41 21 41Z'
				stroke={color}
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}

export { ActionArrowIcon }
