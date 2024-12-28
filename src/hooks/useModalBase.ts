import { useState, useEffect } from 'react'
import { TModalSlug, useModalState } from './zustand/useModalState'

interface Params extends TModalSlug {}

export const useModalBase = ({ slug }: Params) => {
	const modalState = useModalState(
		state => state.modalsStates[slug]?.modalState
	)
	const [visibleTransition, setVisibleTransition] = useState<boolean>(
		!!modalState
	)

	useEffect(() => {
		if (visibleTransition !== modalState) {
			const timeout = setTimeout(() => {
				setVisibleTransition(!!modalState)
			}, 1)
		}
	}, [modalState])

	return {
		visibleTransition,
		modalState,
		setVisibleTransition,
	}
}
