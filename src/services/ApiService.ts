import CategoriesService from "./CategoriesService";
import ProductsService from "./ProductsService";

class ApiService {

    products: ProductsService = new ProductsService();
    categories: CategoriesService = new CategoriesService();

    constructor() {
        return this;
    }

}

export default new ApiService();