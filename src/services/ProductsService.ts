import axios from "@/axios";
import { queryStringHandler } from "@/handlers";
import Product from "@/types/api/Product";
import { QueryItem } from "@/types/client";

class ProductsService {
    async getProductsList(query: QueryItem[]) {
        try {
            const res = await axios.get<Product[]>(
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
}

export default ProductsService;
