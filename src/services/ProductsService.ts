import axios from "@/axios";
import { queryStringHandler } from "@/handlers";
import { QueryItem } from "@/types/client";

class ProductsService {

    async getProductsList(query: QueryItem[]) {
        //TODO: добавить тип ответа
        const res = await axios.get<{ data: any[] }>(`/products${queryStringHandler(query)}`);

        return res.data;
    }

    async getProductItem(id: string) {
        //TODO: добавить тип ответа
        const res = await axios.get(`/product/${id}`);

        return res.data;
    }    

    async getProductsRelated(id: string) {
         //TODO: добавить тип ответа
         const res = await axios.get<any[]>(`/products/related/${id}`);

         return res.data;
    }

}

export default ProductsService;