import Timestamps from "./Timestamps";

export type TransactionType = "withdraw";
export type CurrencyType = "cash";

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
