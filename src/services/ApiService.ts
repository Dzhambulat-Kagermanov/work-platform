import AuthService from "./AuthService";
import CartService from "./CartService";
import CategoriesService from "./CategoriesService";
import FavoritesService from "./FavoritesService";
import ProductsService from "./ProductsService";

class ApiService {
    auth: AuthService = new AuthService();
    products: ProductsService = new ProductsService();
    categories: CategoriesService = new CategoriesService();
    cart: CartService = new CartService();
    favorites: FavoritesService = new FavoritesService();

    constructor() {
        return this;
    }
}

export default new ApiService();
