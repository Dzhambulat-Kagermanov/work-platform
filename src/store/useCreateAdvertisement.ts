import { create } from "zustand";

type TTemplateEditType = "conditions" | "instructions" | "reviewsCriteria";

interface TUseCreateAdvertisement {
    templateEditType?: TTemplateEditType;
    setTemplateEditType: (type: TTemplateEditType) => void;
}

const useCreateAdvertisement = create<TUseCreateAdvertisement>()(
    (set, get) => ({
        setTemplateEditType: (type) => {
            set({ templateEditType: type });
        },
    }),
);

const templateEditTypeSelector = (state: TUseCreateAdvertisement) =>
    state.templateEditType;
const setTemplateEditTypeSelector = (state: TUseCreateAdvertisement) =>
    state.setTemplateEditType;

export {
    useCreateAdvertisement,
    templateEditTypeSelector,
    setTemplateEditTypeSelector,
    type TTemplateEditType,
};
