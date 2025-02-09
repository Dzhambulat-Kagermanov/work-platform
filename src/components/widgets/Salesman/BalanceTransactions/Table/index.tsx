import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { Typography } from "@/components/ui";
import { TRANSACTIONS } from "../constants/transactions";
import { TActiveSwitchItem } from "..";
import cls from "./index.module.scss";

interface Props extends TClassName {
    active: TActiveSwitchItem;
    wrapperCls?: string;
}
const Table: FC<Props> = ({ className, active, wrapperCls }) => {
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
                    {(active === "replenishments"
                        ? TRANSACTIONS.filter(
                              ({ type }) => type === "replenishment",
                          )
                        : active === "withdrawals"
                          ? TRANSACTIONS.filter(
                                ({ type }) => type === "withdrawal",
                            )
                          : TRANSACTIONS
                    ).map(
                        ({
                            date,
                            description,
                            idRansom,
                            idTransaction,
                            sum,
                            type,
                        }) => {
                            return (
                                <tr
                                    className={cn(cls.row, [], {
                                        [cls.isReplenishment]:
                                            type === "replenishment",
                                    })}
                                    key={idTransaction}
                                >
                                    <th
                                        className={cn(cls.column, [
                                            cls.transaction_id,
                                        ])}
                                    >
                                        <Typography font="Inter-R" size={14}>
                                            {idTransaction}
                                        </Typography>
                                    </th>
                                    <th className={cn(cls.column, [cls.sum])}>
                                        <Typography font="Inter-R" size={14}>
                                            {type === "replenishment"
                                                ? `+${sum} ₽`
                                                : `-${sum} ₽`}
                                        </Typography>
                                    </th>
                                    <th className={cn(cls.column, [cls.type])}>
                                        <Typography font="Inter-R" size={14}>
                                            {type === "replenishment"
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
                                            {date}
                                        </Typography>
                                    </th>
                                    <th
                                        className={cn(cls.column, [
                                            cls.blue,
                                            cls.description,
                                        ])}
                                    >
                                        <Typography font="Inter-R" size={14}>
                                            {description}
                                        </Typography>
                                    </th>
                                    <th
                                        className={cn(cls.column, [
                                            cls.ransom_id,
                                        ])}
                                    >
                                        <Typography font="Inter-R" size={14}>
                                            {idRansom}
                                        </Typography>
                                    </th>
                                </tr>
                            );
                        },
                    )}
                </tbody>
            </table>
        </div>
    );
};

export { Table };
