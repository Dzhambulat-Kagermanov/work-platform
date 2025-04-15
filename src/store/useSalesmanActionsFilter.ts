import { create } from "zustand";

type TFilters = "all" | "active" | "stop" | "archive";

interface TUseSalesmanActionsFilter {
    filterProductsQuery: TFilters;
    setFilterProductsQuery: (param: TFilters) => void;
    filterAdsQuery: TFilters;
    setFilterAdsQuery: (param: TFilters) => void;
}

export const useSalesmanActionsFilter = create<TUseSalesmanActionsFilter>()(
    (set, get) => ({
        filterProductsQuery: "all",
        setFilterProductsQuery: (query) => {
            set({
                filterProductsQuery: query,
            });
        },
        filterAdsQuery: "all",
        setFilterAdsQuery: (query) => {
            set({
                filterAdsQuery: query,
            });
        },
    }),
);

export const filterProductsQuerySelector = (state: TUseSalesmanActionsFilter) =>
    state.filterProductsQuery;
export const setFilterProductsQuerySelector = (
    state: TUseSalesmanActionsFilter,
) => state.setFilterProductsQuery;
export const filterQueryAdsSelector = (state: TUseSalesmanActionsFilter) =>
    state.filterAdsQuery;
export const setFilterAdsQuerySelector = (state: TUseSalesmanActionsFilter) =>
    state.setFilterAdsQuery;
