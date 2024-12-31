export const prependZero = (num: number): string => {
	if (num < 10 && num >= 0) {
		return `0${num}`
	}
	return num.toString()
}
