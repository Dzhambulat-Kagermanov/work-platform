import BoolNumber from "./BoolNumber";
import Review from "./Review";
import Shop from "./Shop";
import Timestamps from "./Timestamps";

export type WbProduct = {
    id: number;
    wb_id: number;
    name: string;
    price: string;
    brand: string;
    discount: string;
    rating: string;
    quantity_available: number;
    supplier_id: number;
    category_id: number;
    description: string;
    supplier_rating: string;
    is_archived: BoolNumber;
    shop_id: number;
    images: string[];
    status: string;
    category: number | string;
    buybacks_progress?: string;
    views?: number;
    completed_buybacks_count?: number;
    conversion?: number;
    ads?: unknown[];
} & Timestamps;

type Product = {
    id: number;
    name: string;
    cashback_percentage: string;
    price_with_cashback: string;
    order_conditions: string;
    redemption_instructions: string;
    review_criteria: string;
    redemption_count: number;
    views_count: number;
    one_per_user: number;
    is_archived: BoolNumber;
    status: number;
    balance: string;
    user_id: number;
    product: WbProduct;
    shop: Shop;
    price_without_cashback: number;
    reviews: Review[];
    quantity?: number;
    completed_buybacks_count?: number;
    cr: number;
    in_favorite?: number;
} & Timestamps;

export default Product;
