import axios from "@/axios";
class CategoriesService {
    async getCategories() {
        const res = await axios.get("/category");
        
        return res.data;
    }

    async getSubCategories(categoryId: string) {
        const res = await axios.get(`/sub-category/${categoryId}`);

        return res.data;
    }
}

export default CategoriesService;