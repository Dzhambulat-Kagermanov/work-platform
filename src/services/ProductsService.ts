import axios from "@/axios";
import { queryStringHandler } from "@/handlers";
import Product from "@/types/api/Product";
import { QueryItem } from "@/types/client";

class ProductsService {
    async getProductsList(query: QueryItem[]) {
        //TODO: добавить тип ответа
        const res = await axios.get<{ data: Product[] }>(
            `/products${queryStringHandler(query)}`,
        );

        return res.data.data;
    }

    async getProductItem(id: string) {
        //TODO: добавить тип ответа
        const res = await axios.get<Product>(`/product/${id}`);

        return res.data;
    }

    async getProductsRelated(id: string) {
        //TODO: добавить тип ответа
        const res = await axios.get<Product[]>(`/product/related/${id}`);

        return res.data;
    }
}

export default ProductsService;
