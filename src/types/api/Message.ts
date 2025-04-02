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

type SendedMessage = {
    success: boolean;
    message: {
        buyback_id: string;
        sender_id: number;
        text: string;
        id: number;
        files: string[];
    } & Timestamps;
};

export { type SendedMessage };
export default Message;
