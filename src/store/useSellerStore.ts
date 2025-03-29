import { create } from "zustand";

type IdsData = Record<"productsIds" | "adsIds", number[]>;

type SellerItemsFilter = "all" | "archived" | "stop" | "active";

type SellerStore = {} & IdsData &
    Record<
        "addProductId" | "removeProductId" | "addAdId" | "removeAdId",
        (id: number) => void
    > &
    Record<"resetStore" | "resetProductIds" | "resetAdIds", () => void> &
    Record<"productsSearch" | "adsSearch", string> &
    Record<"setProductsSearch" | "setAdsSearch", (value: string) => void>;

const DEFAULT_STATE = {
    productsIds: [],
    productsSearch: "",
    adsSearch: "",
    adsIds: [],
};

const useSellerStore = create<SellerStore>((set, get) => ({
    ...DEFAULT_STATE,
    setProductsSearch: (productsSearch) => {
        set({ productsSearch });
    },
    setAdsSearch: (adsSearch) => {
        set({ adsSearch });
    },
    addProductId: (id) => {
        set({ productsIds: [...get().productsIds, id] });
    },
    removeProductId: (id) => {
        set({
            productsIds: [...get().productsIds.filter((el) => el !== id)],
        });
    },
    addAdId: (id) => {
        set({ adsIds: [...get().adsIds, id] });
    },
    removeAdId: (id) => {
        set({ adsIds: [...get().adsIds.filter((el) => el !== id)] });
    },
    resetProductIds: () => {
        set({ productsIds: [] });
    },
    resetAdIds: () => {
        set({ adsIds: [] });
    },
    resetStore: () => {
        set({ ...DEFAULT_STATE });
    },
}));

export default useSellerStore;

export const productIdsSelector = (store: SellerStore) => store.productsIds;
export const adsIdsSelector = (store: SellerStore) => store.adsIds;

export const addProductIdSelector = (store: SellerStore) => store.addProductId;
export const removeProductIdSelector = (store: SellerStore) =>
    store.removeProductId;
export const addAdIdSelector = (store: SellerStore) => store.addAdId;
export const removeAdIdSelector = (store: SellerStore) => store.removeAdId;

export const resetProductIdsSelector = (store: SellerStore) =>
    store.resetProductIds;
export const resetAdIdsSelector = (store: SellerStore) => store.resetAdIds;
export const resetSellerStoreSelector = (store: SellerStore) =>
    store.resetStore;

export const productsSearchSelector = (store: SellerStore) =>
    store.productsSearch;
export const adsSearchSelector = (store: SellerStore) => store.adsSearch;
export const setProductsSearchSelector = (store: SellerStore) =>
    store.setProductsSearch;
export const setAdsSearchSelector = (store: SellerStore) => store.setAdsSearch;
