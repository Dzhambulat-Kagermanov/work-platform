import { create } from "zustand";
import { devtools } from "zustand/middleware";

export type TModalSlug = { slug: string };
interface ModalStore {
    modalsStates: Record<
        string,
        | undefined
        | {
              modalState: boolean;
              setModalStateTransition?: () => void;
          }
    >;
    showModal: (params: TModalSlug) => void;
    hideModal: (params: TModalSlug) => void;
    toggleModal: (params: TModalSlug) => void;
}

export const useModalStore = create<ModalStore>()(
    devtools((set) => ({
        modalsStates: {},
        hideModal: ({ slug }) => {
            set(({ modalsStates }) => ({
                modalsStates: {
                    ...modalsStates,
                    [slug]: { modalState: false },
                },
            }));
        },
        showModal: ({ slug }) => {
            set(({ modalsStates }) => ({
                modalsStates: {
                    ...modalsStates,
                    [slug]: { modalState: true },
                },
            }));
        },
        toggleModal: ({ slug }) => {
            set(({ modalsStates }) => ({
                modalsStates: {
                    ...modalsStates,
                    [slug]:
                        modalsStates[slug] !== undefined
                            ? {
                                  modalState: !modalsStates[slug].modalState,
                              }
                            : { modalState: true },
                },
            }));
        },
    })),
);

export const showModalSelector = (state: ModalStore) => state.showModal;
