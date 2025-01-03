import { create } from 'zustand'

export type TModalSlug = { slug: string }
interface Props {
	modalsStates: Record<
		string,
		| undefined
		| {
				modalState: boolean
				setModalStateTransition?: () => void
		  }
	>
	showModal: (params: TModalSlug) => void
	hideModal: (params: TModalSlug) => void
	toggleModal: (params: TModalSlug) => void
}

export const useModalState = create<Props>()(set => ({
	modalsStates: {},
	modalState: false,
	hideModal: ({ slug }) => {
		set(state => ({
			modalsStates: {
				[slug]: { modalState: false },
			},
		}))
	},
	showModal: ({ slug }) => {
		set(state => ({
			modalsStates: {
				[slug]: { modalState: true },
			},
		}))
	},
	toggleModal: ({ slug }) => {
		set(({ modalsStates }) => ({
			modalsStates: {
				[slug]:
					modalsStates[slug] !== undefined
						? {
								modalState: !modalsStates[slug].modalState,
						  }
						: { modalState: true },
			},
		}))
	},
}))
