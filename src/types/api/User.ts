import Timestamps from "./Timestamps";
import BoolNumber from "./BoolNumber";
import Shop from "./Shop";
import Role from "./Role";
import Review from "./Review";
import { WbProduct } from "./Product";

type User = {
    id: number;
    phone: string;
    name: string;
    is_configured: BoolNumber;
    rating: number;
    avatar: string;
    shop: Shop;
    role: Role;
    email: string | null;
} & Pick<Timestamps, "created_at">;

export type Seller = {
    reviews: Review[];
    products: WbProduct[];
} & Record<
    | "product_rating"
    | "seller_rating"
    | "total_reviews"
    | "success_buybacks"
    | "total_reviews"
    | "cashback_paid",
    number
> &
    User;

export default User;
