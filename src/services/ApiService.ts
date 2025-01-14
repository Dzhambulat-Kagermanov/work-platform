import AuthService from "./AuthService";
import CartService from "./CartService";
import CategoriesService from "./CategoriesService";
import ChatService from "./ChatService";
import FavoritesService from "./FavoritesService";
import ProductsService from "./ProductsService";
import TariffsService from "./TariffsService";

class ApiService {
    auth: AuthService = new AuthService();
    products: ProductsService = new ProductsService();
    categories: CategoriesService = new CategoriesService();
    cart: CartService = new CartService();
    favorites: FavoritesService = new FavoritesService();
    chat: ChatService = new ChatService();
    tariffs: TariffsService = new TariffsService();

    constructor() {
        return this;
    }
}

export default new ApiService();
