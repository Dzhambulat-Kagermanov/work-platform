"use client";
import { FC, useRef, useState } from "react";
import { cn } from "@/lib";
import { TClassName } from "@/types";
import { Input, Typography } from "@/components/ui";
import { Switcher } from "./Switcher";
import { SearchIcon } from "@/icons";
import { Table } from "./Table";
import { useScreen } from "@/hooks";
import { SM_MID } from "@/constants";
import cls from "./index.module.scss";
import { useGetTransactionsQuery } from "@/hooks/api/transactions";
import { TransactionType } from "@/types/api";

export type TActiveSwitchItem = "all" | TransactionType;

interface Props extends TClassName {}
const BalanceTransactions: FC<Props> = ({ className }) => {
    const width = useScreen();

    const [active, setActive] = useState<TActiveSwitchItem>("all");
    const [searchValue, setSearchValue] = useState("");
    const [buybackId, setBuybackId] = useState("");

    const timeout = useRef<NodeJS.Timeout>(null);

    const query = () => {
        const items = [];

        if (active !== "all") {
            items.push(`type=${active}`);
        }

        const trimBuybackId = buybackId.trim();

        if (trimBuybackId) {
            items.push(`buyback_id=${trimBuybackId}`);
        }

        const result = items.join("&");

        return `${items.length ? "?" : ""}${result}`;
    };

    const { data: transactions } = useGetTransactionsQuery(query());

    return (
        <section className={cn(cls.wrapper, [className])}>
            <Typography
                font="Inter-SB"
                size={width > SM_MID ? 32 : 20}
                tag="h2"
            >
                Транзакции:
            </Typography>
            <Switcher
                className={cn(cls.switcher)}
                active={active}
                setActive={setActive}
            />
            <Input
                icon={
                    <SearchIcon
                        color="var(--grey-200)"
                        className={cn(cls.icon)}
                    />
                }
                wrapperCls={cn(cls.inp_wrapper)}
                inpCls={cn(cls.inp)}
                placeholder="Введите ID выкупа"
                value={searchValue}
                onChange={(e) => {
                    const value = e.target.value;
                    setSearchValue(value);

                    if (timeout.current) {
                        clearTimeout(timeout.current);
                    }

                    timeout.current = setTimeout(() => {
                        setBuybackId(value);
                    }, 600);
                }}
            />
            <div className={cn(cls.table_wrapper)}>
                <Table
                    wrapperCls={cn(cls.table)}
                    className={cn(cls.table_content)}
                    active={active}
                    transactions={transactions}
                />
                {/* <Pagination
                    className={cn(cls.pagination)}
                    pages={{
                        current: 1,
                        max: 10,
                    }}
                /> */}
            </div>
        </section>
    );
};

export { BalanceTransactions };
