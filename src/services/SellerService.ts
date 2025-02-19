import axios from "@/axios";
import { queryStringHandler } from "@/handlers";
import { PaginationData, Shop } from "@/types/api";
import Product, { WbProduct } from "@/types/api/Product";
import { QueryItem } from "@/types/client";

export type AddWbProductData = {
    id: string;
};

export type AdsIdsData = {
    ad_ids: number[];
};

export type ProductIdsData = {
    product_ids: number[];
};

export type CreateAdvData = {};

class SellerService {
    async createAdv(data: CreateAdvData) {
        // TODO: добавить типы
        const res = await axios.post<{ ads: any; user: any }>(
            `/seller/ads`,
            data,
        );

        return res.data;
    }
    async getSellerWbProduct(id: string) {
        const res = await axios.get<WbProduct>(`/wb/product/${id}`);

        return res.data;
    }

    async getProducts(query: QueryItem[]) {
        const res = await axios.get<PaginationData<WbProduct[]>>(
            `/seller/products${queryStringHandler(query)}`,
        );

        return res.data;
    }
    async stopProducts(data: ProductIdsData) {
        const res = await axios.post("/seller/product/stop", data);
        return res;
    }
    async archiveProducts(data: ProductIdsData) {
        const res = await axios.post("/seller/products/archive", data);
        return res;
    }
    async duplicateProducts(data: ProductIdsData) {
        const res = await axios.post("/seller/products/duplicate", data);
        return res;
    }
    async fetchWbProduct(data: AddWbProductData) {
        const res = await axios.get<{ product: WbProduct; shop: Shop }>(
            `/wb/fetch-product/${data.id}`,
        );
        return res.data;
    }
    async addWbProduct(data: AddWbProductData) {
        const res = await axios.post<{ product: WbProduct }>(
            `/wb/add-product/${data.id}`,
        );
        return res.data;
    }
    async applyPromocode(promocode: string) {
        const res = await axios.post<{ message: string }>(
            "/seller/promocode/apply",
            {
                promocode,
            },
        );

        return res;
    }
    async getAdsList(query: QueryItem[]) {
        const res = await axios.get<PaginationData<Product[]>>(
            `/seller/ads${queryStringHandler(query)}`,
        );
        return res.data;
    }
    async getAd(id: number) {
        const res = await axios.get<Product>(`/seller/ads/${id}`);
        return res.data;
    }
    async archiveAds(data: AdsIdsData) {
        const res = await axios.post("/seller/ads/archive", data);
        return res;
    }
    async stopAds(data: AdsIdsData) {
        const res = await axios.post("/seller/ads/stop", data);
        return res;
    }
    async duplicateAds(data: AdsIdsData) {
        const res = await axios.post("/seller/ads/duplicate", data);
        return res;
    }
}

export default SellerService;
