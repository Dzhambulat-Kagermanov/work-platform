import { create } from "zustand";

// TODO: Добавить типы сортировки

export type SortType = "";

type FiltersStore = {
    mainPage: {
        sortBy: SortType;
    };
    categoryPage: {};
};

const useFiltersStore = () =>
    create<FiltersStore>(() => ({
        mainPage: {
            sortBy: "",
        },
        categoryPage: {},
    }));

export default useFiltersStore;

export const mainPageFiltersSelector = (store: FiltersStore) => store.mainPage;
