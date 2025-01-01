import { TFormat } from '..'
import { prependZero } from './prependZero'

export const formatter = (seconds: number, format?: TFormat): string => {
	if (format === 'MM:SS') {
		const MIN = Math.floor(seconds / 60)
		const SEC = seconds - MIN * 60
		return `${prependZero(MIN)}:${prependZero(SEC)}`
	} else if (format === 'HH:MM:SS') {
		const HOURS = Math.floor(seconds / 60 / 60)
		const MIN = Math.floor((seconds - HOURS * 60 * 60) / 60)
		const SEC = seconds - (MIN * 60 + HOURS * 60 * 60)
		return `${prependZero(HOURS)}:${prependZero(MIN)}:${prependZero(SEC)}`
	} else if (format === 'SS') {
		return `${prependZero(seconds)}`
	} else {
		return seconds.toString()
	}
}
