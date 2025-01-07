export type TTransactionItemProps = {
    idTransaction: number;
    sum: number;
    type: "replenishment" | "withdrawal";
    date: string;
    description: string;
    idRansom: number;
};
