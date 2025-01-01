// /articles/?/comments - ? (пропуск сегмента)  пропускать проверку для указанного оператором ? сегмента пути на соответствие

// /articles/... - ... (пропуск проверки) пропускать проверку на соответствие остальной части пути если достигнут данный оператор

export const pathValidating = (path: string, validator: string): boolean => {
	let result = false
	const pathParts = path.substring(1).split('/')
	const activePathParts = validator.substring(1).split('/')

	const loopStartLength =
		pathParts.length >= activePathParts.length
			? pathParts.length
			: activePathParts.length

	for (let i = 0; i < loopStartLength; i++) {
		const part = pathParts[i]
		const partValidating = activePathParts[i]

		if (partValidating === '?') {
			result = true
			continue
		}
		if (partValidating === '...') {
			result = true
			break
		}
		if (partValidating !== part) {
			result = false
			break
		}

		result = true
	}

	return result
}
