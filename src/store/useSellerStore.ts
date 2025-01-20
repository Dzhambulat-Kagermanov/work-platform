import { create } from "zustand";

type IdsData = Record<"productsIds" | "adsIds", number[]>;

type SellerStore = {
} & IdsData;

const DEFAULT_STATE = {
}

const useSellerStore = () => create<SellerStore>((set, get) => ({
    productsIds: [],
    adsIds: [],
}));

export default useSellerStore;