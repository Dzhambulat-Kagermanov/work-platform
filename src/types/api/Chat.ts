import Ad from "./Ad";
import Message from "./Message";
import Timestamps from "./Timestamps";
import User from "./User";

type Chat = {
    id: number;
    ads_id: number;
    user_id: number;
    // status: "pending";
    status: string;
    price: number;
    is_archived: number;
    has_review_by_seller: number;
    has_review_by_buyer: number;
    laravel_through_key: number;
    ad: Ad;
    user: User;
    messages: Message[];
} & Timestamps;

export default Chat;
