type Balance = {
    accessBalance: string;
    onConfirmation: string;
    redemption_count?: number;
    transactionData?: Record<
        "last_7_days" | "today" | "yesterday",
        number | null
    >;
};

export default Balance;
