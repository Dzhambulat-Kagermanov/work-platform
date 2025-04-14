import Timestamps from "./Timestamps";

export type TTemplate = {
    id: number;
    text: string;
    type: string;
    user_id: number;
} & Timestamps;
