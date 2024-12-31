import { FC } from 'react'
import { TIcon } from '@/types'

interface Props extends TIcon {
	stroke: string
}
const FolderIcon: FC<Props> = ({ color, className, stroke }) => {
	return (
		<svg
			width='31'
			height='28'
			viewBox='0 0 31 28'
			fill='none'
			className={className}
		>
			<path
				d='M29.3333 23.6667C29.3333 24.4181 29.0348 25.1388 28.5035 25.6701C27.9721 26.2015 27.2514 26.5 26.5 26.5H3.83333C3.08189 26.5 2.36122 26.2015 1.82986 25.6701C1.29851 25.1388 1 24.4181 1 23.6667V3.83333C1 3.08189 1.29851 2.36122 1.82986 1.82986C2.36122 1.29851 3.08189 1 3.83333 1H10.9167L13.75 5.25H26.5C27.2514 5.25 27.9721 5.54851 28.5035 6.07986C29.0348 6.61122 29.3333 7.33189 29.3333 8.08333V23.6667Z'
				fill={color}
				stroke={stroke}
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}

export { FolderIcon }
