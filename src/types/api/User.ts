import Timestamps from "./Timestamps";
import BoolNumber from "./BoolNumber";
import Shop from "./Shop";
import Role from "./Role";
import Review from "./Review";

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
} & Record<
    "product_rating" | "seller_rating" | "total_reviews" | "success_buybacks",
    number
> &
    User;

export default User;
