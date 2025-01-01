'use client'
import { FC, useEffect, useState } from 'react'
import { formatter } from './lib/formatter'

export type TFormat = 'HH:MM:SS' | 'MM:SS' | 'SS'

type TGeneral = {
	second: number
	onComplete?: () => void
}
type Props =
	| ({
			customFormatter?: (seconds: number) => string
			format?: never
	  } & TGeneral)
	| ({
			customFormatter?: never
			format?: TFormat
	  } & TGeneral)

const Timer: FC<Props> = ({ format, second, customFormatter, onComplete }) => {
	const [seconds, setSeconds] = useState<number>(second)
	let isFirst = true
	useEffect(() => {
		const interval = setInterval(() => {
			setSeconds(cur => {
				if (cur - 1 >= 0) return cur - 1
				if (cur === 0) {
					if (isFirst) {
						onComplete && onComplete()
						clearInterval(interval)
					}
					isFirst = false
				}
				return cur
			})
		}, 1000)

		return () => {
			clearInterval(interval)
		}
	}, [])

	if (customFormatter) {
		return <>{customFormatter(seconds)}</>
	} else {
		return <>{formatter(seconds, format)}</>
	}
}

export { Timer }
