import axios from "@/axios";
import { WbProduct } from "@/types/api/Product";

export type AddWbProductData = {
    id: number;
}

class SellerService {
    async getProducts(query?: string) {
        const res = await axios.get<{ data: WbProduct[], current_page: number, last_page: number; }>(`/seller/product${query || ""}`);

        return res.data.data;
    }
    async stopProducts(productIds: number[]) {
        const res = await axios.post("/seller/products/stop", {
            product_ids: productIds,
        });
        return res;
    }
    async archiveProducts(productIds: number[]) {
        const res = await axios.post("/seller/products/archive", {
            product_ids: productIds,
        });
        return res;
    }
    async duplicateProducts(productIds: number[]) {
        const res = await axios.post("/seller/products/duplicate", {
            product_ids: productIds,
        });
        return res;
    }
    async fetchWbProduct(data: AddWbProductData) {
        const res = await axios.get<{ product: WbProduct }>(`/wb/fetch-product/${data.id}`);
        return res.data;
    }
    async addWbProduct(data: AddWbProductData) {
        const res = await axios.post<{ product: WbProduct }>(`/wb/add-product/${data.id}`);
        return res.data;
    }
}

export default SellerService;