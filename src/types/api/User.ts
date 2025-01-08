import Timestamps from "./Timestamps";
import BoolNumber from "./BoolNumber";

type User = {
    id: number;
    phone: string;
    name: string;
    is_configured: BoolNumber;
} & Pick<Timestamps, 'created_at'>

export default User;