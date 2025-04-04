import { Timestamps } from "../api";

export type TNotificationItemProps = {
    id: number;
    user_id: number;
    buyback_id: number;
    text: string;
    is_read: string;
} & Timestamps;
