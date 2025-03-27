import Timestamps from "./Timestamps";

type Message = {
    id: number;
    text: string;
    sender_id: number;
    buyback_id: number;
    type: string;
    system_type: null;
    is_read: number;
    color: string;
} & Timestamps;

export default Message;
