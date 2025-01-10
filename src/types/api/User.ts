import Timestamps from "./Timestamps";
import BoolNumber from "./BoolNumber";
import Shop from "./Shop";
import Role from "./Role";

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

export default User;
