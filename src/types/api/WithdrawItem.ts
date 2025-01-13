import Timestamps from "./Timestamps";

export type WithdrawStatus = "pending";

type WithdrawItem = {
    id: number;
    user_id: number;
    amount: string;
    status: WithdrawStatus;
    card_number: string;
} & Timestamps;

export default WithdrawItem;
