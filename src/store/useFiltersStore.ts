import { create } from "zustand";

export type SortType =
    | "PUBLICATION_DATE"
    | "PRICE_DESC"
    | "PRODUCT_RATING"
    | "SELLER_RATING"
    | "CASHBACK_AMOUNT"
    | "POPULAR"
    | "";

export type Price = Record<"priceFrom" | "priceTo", string>;
export type Cashback = Record<"cashbackFrom" | "cashbackTo", number>;
export type SortBy = Record<"sortBy", SortType>;

type Filters = Price & Cashback & SortBy;

type SetFiltersAction<T = Filters> = (filters: T) => void;

type FiltersStore = {
    mainPage: Filters;
    setMainPageFilters: SetFiltersAction;
    categoryPage: Filters;
    setCategoryPageFilters: SetFiltersAction;
    setMainPageDefaultFilters: () => void;
};

const DEFAULT_FILTERS: Filters = {
    priceFrom: "",
    priceTo: "",
    cashbackFrom: 0,
    cashbackTo: 100,
    sortBy: "",
};

const useFiltersStore = create<FiltersStore>((set) => ({
    mainPage: {
        ...DEFAULT_FILTERS,
    },
    setMainPageFilters: (filters) => {
        set({
            mainPage: {
                ...filters,
            },
        });
    },
    setMainPageDefaultFilters: () => {
        set({
            mainPage: {
                ...DEFAULT_FILTERS,
            },
        });
    },
    categoryPage: {
        ...DEFAULT_FILTERS,
    },
    setCategoryPageFilters: (filters) => {
        set({
            categoryPage: {
                ...filters,
            },
        });
    },
}));

export default useFiltersStore;

export const mainPageFiltersSelector = (store: FiltersStore) => store.mainPage;
export const mainPageSetFiltersSelector = (store: FiltersStore) =>
    store.setMainPageFilters;

export const categoryPageFiltersSelector = (store: FiltersStore) =>
    store.categoryPage;
export const categoryPageSetFiltersSelector = (store: FiltersStore) =>
    store.setCategoryPageFilters;

export const mainPageSetDefaultFilters = (store: FiltersStore) => store.setMainPageDefaultFilters;