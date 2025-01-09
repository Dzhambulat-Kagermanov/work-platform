import Timestamps from "./Timestamps";

type User = {
    id: number;
    phone: string;
    name: string;
    is_configured: 0 | 1;
} & Pick<Timestamps, "created_at">;

export default User;
