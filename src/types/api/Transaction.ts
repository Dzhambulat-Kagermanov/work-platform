import Timestamps from "./Timestamps";

export type TransactionType = "withdraw" | "deposit";
export type CurrencyType = "cash" | "buyback";

type Transaction = {
    id: number;
    amount: string;
    transaction_type: TransactionType;
    currency_type: CurrencyType;
    description: string;
    user_id: number;
    ads_id: number | null;
} & Timestamps;

export default Transaction;
