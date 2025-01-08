import AuthService from "./AuthService";
import CategoriesService from "./CategoriesService";
import ProductsService from "./ProductsService";

class ApiService {
    auth: AuthService = new AuthService();
    products: ProductsService = new ProductsService();
    categories: CategoriesService = new CategoriesService();

    constructor() {
        return this;
    }
}

export default new ApiService();
