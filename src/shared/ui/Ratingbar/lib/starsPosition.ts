export interface IRatingPositionsProps {
	expandedRating: string | number
	ratingPositions: string[]
}

export const starsPosition = (rating: number): IRatingPositionsProps => {
	let expandedRating: number | string = rating.toString()
	const ratingPositions: string[] = []
	const ratingFlooring: number = Math.floor(rating)

	if (rating % 1 === 0) {
		for (let index = 0; index < rating; index++) {
			ratingPositions.push('full')
		}
		if (5 - rating !== 0) {
			for (let index = 0; index < 5 - rating; index++) {
				ratingPositions.push('empty')
			}
		}
		expandedRating = `${rating}.0`
	} else {
		for (let index = 0; index < ratingFlooring; index++) {
			ratingPositions.push('full')
		}
		ratingPositions.push('half')

		if (5 - rating >= 1) {
			for (let index = 1; index < Math.ceil(5 - rating); index++) {
				ratingPositions.push('empty')
			}
		}
	}
	return { expandedRating, ratingPositions }
}
