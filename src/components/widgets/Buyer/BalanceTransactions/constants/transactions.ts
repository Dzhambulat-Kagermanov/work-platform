import { TTransactionItemProps } from "@/types";

export const TRANSACTIONS: TTransactionItemProps[] = [
    {
        date: "Сегодня в 12:00",
        description: "Успешный выкуп",
        idRansom: 12345678,
        idTransaction: 12345678,
        sum: 500,
        type: "replenishment",
    },
    {
        date: "Сегодня в 12:00",
        description: "Вывод на карту",
        idRansom: 12345678,
        idTransaction: 12345679,
        sum: 500,
        type: "withdrawal",
    },
];
