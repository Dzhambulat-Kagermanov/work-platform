import AuthService from "./AuthService";
import CartService from "./CartService";
import CategoriesService from "./CategoriesService";
import ChatService from "./ChatService";
import FavoritesService from "./FavoritesService";
import OrdersService from "./OrdersService";
import ProductsService from "./ProductsService";
import SellerService from "./SellerService";
import TariffsService from "./TariffsService";
import TransactionsService from "./TransactionsService";
import UsersService from "./UsersService";

class ApiService {
    auth: AuthService = new AuthService();
    products: ProductsService = new ProductsService();
    categories: CategoriesService = new CategoriesService();
    cart: CartService = new CartService();
    favorites: FavoritesService = new FavoritesService();
    chat: ChatService = new ChatService();
    tariffs: TariffsService = new TariffsService();
    seller: SellerService = new SellerService();
    users: UsersService = new UsersService();
    orders: OrdersService = new OrdersService();
    transactions: TransactionsService = new TransactionsService();

    constructor() {
        return this;
    }
}

export default new ApiService();
