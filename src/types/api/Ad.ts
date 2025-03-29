import { WbProduct } from "./Product";
import Review from "./Review";
import Shop from "./Shop";
import Timestamps from "./Timestamps";
import User from "./User";

type Ad = {
    id: number;
    product_id: number;
    name: string;
    cashback_percentage: number;
    price_with_cashback: number;
    order_conditions: string;
    redemption_instructions: string;
    review_criteria: string;
    redemption_count: number;
    views_count: number;
    one_per_user: number;
    is_archived: number;
    status: number;
    balance: string;
    in_favorite: number;
    user_id: number;
    product: WbProduct;
    shop: Shop;
    reviews: Review[];
    user: User;
    price_without_cashback: number;
} & Timestamps;

export default Ad;
