"use client";
import { FC, useState } from "react";
import { cn } from "@/lib";
import { TClassName } from "@/types";
import { Action, Input, Typography } from "@/components/ui";
import { Switcher } from "./Switcher";
import { SearchIcon } from "@/icons";
import { Table } from "./Table";
import { useScreen } from "@/hooks";
import { SM_MID } from "@/constants";
import cls from "./index.module.scss";
import { useGetTransactionsProductsList, useGetTransactionsQuery } from "@/hooks/api/transactions";
import { PageLoader } from "@/components/ui/loaders";
import { PageErrorStub } from "@/components/ui/page-error-stub";
import { TransactionType } from "@/types/api";
import { useDebounce } from "use-debounce";

export type TActiveSwitchItem = "all" | TransactionType;

interface Props extends TClassName {}
const BalanceTransactions: FC<Props> = ({ className }) => {
    const [search, setSearch] = useState("");
    const [searchDebounce] = useDebounce(search, 600);
    const [active, setActive] = useState<TActiveSwitchItem>("all");
    const [currentProduct, setCurrentProduct] = useState<number | null>(null);

    const { data: transactionsProducts } = useGetTransactionsProductsList();

    const query = () => {
        const result = [];

        if (active !== "all") {
            result.push({
                key: "type",
                value: active,
            })
        }

        if (currentProduct) {
            result.push({
                key: "product_id",
                value: `${currentProduct}`,
            })
        }

        const searchTrim = searchDebounce.trim();

        if (searchTrim) {
            result.push({
                key: "buyback_id",
                value: searchTrim,
            })
        }

        return result;
    };

    const {
        data: transactions,
        isLoading,
        isError,
    } = useGetTransactionsQuery(query());

    const selectProduct = (id: number) => {
        setCurrentProduct(id);
    }

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
                {
                    transactionsProducts && transactionsProducts.length ? 
                        <Action
                            className={cn(cls.action, ["max-w-[200px]"])}
                            actionBtnText={currentProduct ? `${transactionsProducts.find(el => el.id === currentProduct)?.name ?? "-"}` : "Выбрать товар"}
                            actions={transactionsProducts.map((el) => ({
                                onClick: () => selectProduct(el.id),
                                text: el.name,
                            }))}
                        />
                    : 
                        <div />
                }
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
                        setSearch(e.target.value);
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
