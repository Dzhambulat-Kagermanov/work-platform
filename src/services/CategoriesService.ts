import axios from "@/axios";
import { CategoryItem } from "@/types/api";
class CategoriesService {
    async getCategories() {
        const res = await axios.get<CategoryItem[]>("/category");

        return res.data;
    }

    async getSubCategories(categoryId: string) {
        const res = await axios.get<CategoryItem[]>(
            `/sub-category/${categoryId}`,
        );

        return res.data;
    }
}

export default CategoriesService;
