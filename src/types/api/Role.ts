import Timestamps from "./Timestamps";

export type RoleSlug = "seller" | "buyer";

type Role = {
    id: number;
    name: string;
    slug: RoleSlug;
} & Timestamps;

export default Role;
