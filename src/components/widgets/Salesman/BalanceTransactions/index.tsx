"use client";
import { FC, useRef, useState } from "react";
import { cn } from "@/lib";
import { TClassName } from "@/types";
import { Action, Input, Typography } from "@/components/ui";
import { Switcher } from "./Switcher";
import { SearchIcon } from "@/icons";
import { Table } from "./Table";
import { useScreen } from "@/hooks";
import { SM_MID } from "@/constants";
import cls from "./index.module.scss";
import { useGetTransactionsQuery } from "@/hooks/api/transactions";
import { PageLoader } from "@/components/ui/loaders";
import { PageErrorStub } from "@/components/ui/page-error-stub";
import { TransactionType } from "@/types/api";

export type TActiveSwitchItem = "all" | TransactionType;

interface Props extends TClassName {}
const BalanceTransactions: FC<Props> = ({ className }) => {
    const [search, setSearch] = useState("");
    const [searchDebounce, setSearchDebounce] = useState("");
    const timeout = useRef<NodeJS.Timeout>(null);
    const [active, setActive] = useState<TActiveSwitchItem>("all");

    const query = () => {
        const result = [];

        if (active !== "all") {
            result.push(`type=${active}`);
        }

        const searchTrim = searchDebounce.trim();

        if (searchTrim) {
            result.push(`search=${searchTrim}`);
        }

        return `${result.length ? "?" : ""}${result.join("&")}`;
    };

    const {
        data: transactions,
        isLoading,
        isError,
    } = useGetTransactionsQuery(query());

    const width = useScreen();

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
            <div className={cn(cls.actions)}>
                <Action
                    className={cn(cls.action)}
                    actionBtnText="Выбрать товар"
                    actions={[
                        { link: "#", text: "Товар 1" },
                        { link: "#", text: "Товар 2" },
                        { link: "#", text: "Товар 3" },
                        { link: "#", text: "Товар 4" },
                    ]}
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
                    onChange={(e) => {
                        const value = e.target.value;
                        setSearch(value);

                        if (timeout.current) {
                            clearTimeout(timeout.current);
                        }

                        timeout.current = setTimeout(() => {
                            setSearchDebounce(value);
                        }, 600);
                    }}
                    value={search}
                />
            </div>
            <div className={cn(cls.table_wrapper)}>
                {!isLoading && transactions ? (
                    <Table
                        transactions={transactions}
                        wrapperCls={cn(cls.table)}
                        active={active}
                    />
                ) : isError ? (
                    <PageErrorStub />
                ) : (
                    <PageLoader />
                )}
                {/* <Pagination
                    className={cn(cls.pagination)}
                    pagination={pagination}
                /> */}
            </div>
        </section>
    );
};

export { BalanceTransactions };
