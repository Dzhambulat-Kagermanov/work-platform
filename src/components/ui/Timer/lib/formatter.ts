import { endingsFormatter } from '@/lib'
import { TFormat } from '..'

export const formatter = (seconds: number, format?: TFormat): string => {
	const days = Math.floor(seconds / (24 * 3600))
	const hours = Math.floor((seconds % (24 * 3600)) / 3600)
	const minutes = Math.floor((seconds % 3600) / 60)
	const secs = seconds % 60

	switch (format) {
		case 'HH:MM:SS':
			const totalHours = Math.floor(seconds / 60 / 60)
			return `${String(totalHours).padStart(2, '0')}:${String(minutes).padStart(
				2,
				'0'
			)}:${String(secs).padStart(2, '0')}`
		case 'MM:SS':
			const totalMinutes = Math.floor(seconds / 60)
			return `${String(totalMinutes).padStart(2, '0')}:${String(secs).padStart(
				2,
				'0'
			)}`
		case 'DD:HH:MM:SS':
			const totalDays = Math.floor(seconds / 60 / 60 / 24)
			return `${totalDays} ${endingsFormatter(totalDays, [
				'день',
				'дня',
				'дней',
			])} ${String(hours).padStart(2, '0')}:${String(minutes).padStart(
				2,
				'0'
			)}:${String(secs).padStart(2, '0')}`
		default:
			throw new Error('Invalid format')
	}
}
