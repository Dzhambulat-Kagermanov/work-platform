import axios from "@/axios";
import { queryStringHandler } from "@/handlers";
import { PaginationData } from "@/types/api";
import Product from "@/types/api/Product";
import { QueryItem } from "@/types/client";

class ProductsService {
    async getProductsList(query: QueryItem[]) {
        try {
            const res = await axios.get<PaginationData<Product[]>>(
                `/products${queryStringHandler(query)}`,
            );

            return res.data;
        } catch (error) {
            console.error(error);
        }
    }

    async getProductItem(id: string) {
        try {
            const res = await axios.get<Product>(`/product/${id}`);

            return res.data;
        } catch (error) {
            console.error(error);
        }
    }

    async getProductsRelated(id: string) {
        try {
            const res = await axios.get<Product[]>(`/product/related/${id}`);

            return res.data;
        } catch (error) {
            console.error(error);
        }
    }
    
    async getProductFeedbacks(productId: string, page: number = 1) {
        try {
            const res = await axios.get(`/product/${productId}/feedbacks/${page}`);
            return res.data;
        } catch (error) {
            console.error(error);
        }
    }
}

export default ProductsService;
