import { FC } from 'react'
import { TIcon } from '@/types'

interface Props extends Omit<TIcon, 'color'> {
	color?: string
}
const ErrorIcon: FC<Props> = ({ color, className }) => {
	return (
		<svg
			width='16'
			height='16'
			viewBox='0 0 16 16'
			fill='none'
			className={className}
		>
			<path
				d='M8.00065 5.33325V7.99992M8.00065 10.6666H8.00732M14.6673 7.99992C14.6673 11.6818 11.6826 14.6666 8.00065 14.6666C4.31875 14.6666 1.33398 11.6818 1.33398 7.99992C1.33398 4.31802 4.31875 1.33325 8.00065 1.33325C11.6826 1.33325 14.6673 4.31802 14.6673 7.99992Z'
				stroke={color || 'var(--red-100)'}
				strokeWidth='1.33333'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}

export { ErrorIcon }
