import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { Typography } from "@/components/ui";
import { TActiveSwitchItem } from "..";
import cls from "./index.module.scss";
import { Transaction } from "@/types/api";
import { dateParserHandler } from "@/handlers";

interface Props extends TClassName {
    active: TActiveSwitchItem;
    transactions: Transaction[];
    wrapperCls?: string;
}
const Table: FC<Props> = ({ className, active, wrapperCls, transactions }) => {
    return (
        <div className={cn(cls.wrapper, [wrapperCls])}>
            <table className={cn(cls.table, [className])}>
                <thead className={cn(cls.head)}>
                    <tr className={cn(cls.row)}>
                        <th className={cn(cls.column)}>
                            <Typography font="Inter-M" size={12}>
                                ID транзакции
                            </Typography>
                        </th>
                        <th className={cn(cls.column)}>
                            <Typography font="Inter-M" size={12}>
                                Сумма
                            </Typography>
                        </th>
                        <th className={cn(cls.column)}>
                            <Typography font="Inter-M" size={12}>
                                Тип
                            </Typography>
                        </th>
                        <th className={cn(cls.column)}>
                            <Typography font="Inter-M" size={12}>
                                Дата и время
                            </Typography>
                        </th>
                        <th className={cn(cls.column)}>
                            <Typography font="Inter-M" size={12}>
                                Описание
                            </Typography>
                        </th>
                        <th className={cn(cls.column)}>
                            <Typography font="Inter-M" size={12}>
                                ID обьявления
                            </Typography>
                        </th>
                    </tr>
                </thead>
                <tbody className={cn(cls.body)}>
                    {transactions.map((item, index) => {
                        const isDeposit = item.transaction_type === "deposit";
                        return (
                            <tr
                                className={cn(cls.row, [], {
                                    [cls.isReplenishment]: isDeposit,
                                })}
                                key={index}
                            >
                                <th
                                    className={cn(cls.column, [
                                        cls.transaction_id,
                                    ])}
                                >
                                    <Typography font="Inter-R" size={14}>
                                        {item.id}
                                    </Typography>
                                </th>
                                <th className={cn(cls.column, [cls.sum])}>
                                    <Typography font="Inter-R" size={14}>
                                        {isDeposit
                                            ? `+${item.amount} ₽`
                                            : `-${item.amount} ₽`}
                                    </Typography>
                                </th>
                                <th className={cn(cls.column, [cls.type])}>
                                    <Typography font="Inter-R" size={14}>
                                        {isDeposit
                                            ? "Пополнение"
                                            : "Вывод средств"}
                                    </Typography>
                                </th>
                                <th
                                    className={cn(cls.column, [
                                        cls.blue,
                                        cls.date,
                                    ])}
                                >
                                    <Typography font="Inter-R" size={14}>
                                        {dateParserHandler(item.created_at)}
                                    </Typography>
                                </th>
                                <th
                                    className={cn(cls.column, [
                                        cls.blue,
                                        cls.description,
                                    ])}
                                >
                                    <Typography font="Inter-R" size={14}>
                                        {item.description}
                                    </Typography>
                                </th>
                                <th className={cn(cls.column, [cls.ransom_id])}>
                                    <Typography font="Inter-R" size={14}>
                                        {item.ads_id}
                                    </Typography>
                                </th>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export { Table };
