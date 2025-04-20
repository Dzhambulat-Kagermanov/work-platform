import axios from "@/axios";
import { queryStringHandler } from "@/handlers";
import { PaginationData, Shop } from "@/types/api";
import Ad from "@/types/api/Ad";
import Product, { WbProduct } from "@/types/api/Product";
import { TTemplate } from "@/types/api/Template";
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
        try {
            const res = await axios.get<WbProduct>(`/wb/product/${id}`);
            return res.data;
        } catch (error) {
            return null;
        }
    }

    async getProducts(query: QueryItem[]) {
        const res = await axios.get<PaginationData<WbProduct[]>>(
            `/seller/products${queryStringHandler(query)}`,
        );

        return res.data;
    }
    async updateAdv({
        id,
        ...body
    }: Pick<
        Ad,
        | "id"
        | "name"
        | "cashback_percentage"
        | "order_conditions"
        | "review_criteria"
        | "one_per_user"
        | "is_archived"
        | "redemption_instructions"
    >) {
        const res = await axios.patch(`/seller/ads/${id}`, body);

        return res.data;
    }

    async updateAdvConditionsTemplate(template: string) {
        const res = await axios.patch("/template/order_conditions", {
            text: template,
        });

        return res.data;
    }
    async updateAdvInstructionsTemplate(template: string) {
        const res = await axios.patch("/template/redemption_instructions", {
            text: template,
        });

        return res.data;
    }
    async updateAdvCriteriaTemplate(template: string) {
        const res = await axios.patch("/template/review_criteria", {
            text: template,
        });

        return res.data;
    }

    async getAdvConditionsTemplates() {
        const res = await axios.get<TTemplate>("/template/order_conditions");

        return res.data;
    }
    async getAdvInstructionsTemplates() {
        const res = await axios.get<TTemplate>(
            "/template/redemption_instructions",
        );

        return res.data;
    }
    async getAdvReviewsTemplates() {
        const res = await axios.get<TTemplate>("/template/review_criteria");

        return res.data;
    }

    async stopProducts(data: ProductIdsData) {
        const res = await axios.post("/seller/products/stop", data);
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
        const res = await axios.post<{
            product: WbProduct;
            has_products: boolean;
        }>(`/wb/add-product/${data.id}`);
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
    async referralLink(userId: number) {
        const res = await axios.post(`/referral/${userId}`);
        return res.data;
    }

    async getAd(id: Ad["id"]) {
        const res = await axios.get<Ad>(`/seller/ads/${id}`);
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
