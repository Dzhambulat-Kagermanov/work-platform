import BoolNumber from "./BoolNumber";
import { EnChatStatuses } from "./Chat";
import Product from "./Product";
import Role from "./Role";
import Timestamps from "./Timestamps";

export type Message = {
    id: number;
    color?: string;
    is_read: BoolNumber;
    sender_id: number;
    system_type: null;
    text: string;
    type: "text";
    whoSend: Role["slug"];
} & Timestamps;

type Order = {
    price: number;
    id: number;
    has_review_by_buyer: BoolNumber;
    has_review_by_seller: BoolNumber;
    is_archived: BoolNumber;
    status: EnChatStatuses;
    messages: Message[];
    ad: Product;
    whoSend: Role["slug"];
    ads_id: number;
} & Timestamps;

export default Order;
