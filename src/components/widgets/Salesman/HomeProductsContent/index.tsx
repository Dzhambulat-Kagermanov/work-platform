import { FC, useEffect } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import cls from "./index.module.scss";
import { HomeTable } from "../HomeTable";
import { ProductsTableBodyItem } from "@/components/entities/ProductsTableBodyItem";
import { useGetSellerProductsQuery } from "@/hooks/api/seller";
import { PageLoader } from "@/components/ui/loaders";
import { usePagination } from "@/hooks/client";
import { useSellerStore } from "@/store";
import { productsSearchSelector } from "@/store/useSellerStore";
import toast from "react-hot-toast";

interface Props extends TClassName {}
const HomeProductsContent: FC<Props> = ({ className }) => {
    const { pagination, setPagination } = usePagination();

    const productsSearch = useSellerStore(productsSearchSelector);

    const query = () => {
        const res = [];

        if (productsSearch) {
            res.push({
                key: "search",
                value: productsSearch,
            });
        }

        return res;
    };

    const {
        data: products,
        isLoading,
        refetch,
    } = useGetSellerProductsQuery(query());

    useEffect(() => {
        if (productsSearch) refetch();
    }, [productsSearch]);

    if (isLoading) {
        return <PageLoader />;
    }

    if (!products || !products.data.length) {
        return (
            <div className="p-2 text-center flex items-center justify-center">
                <p>В данный момент товаров нет</p>
            </div>
        );
    }

    return (
        <HomeTable
            body={products.data.map((item, index) => (
                <ProductsTableBodyItem item={item} key={index} />
            ))}
            head={[
                "Товар",
                <span className={cls.tooltip}>
                    Статус{" "}
                    <button
                        onClick={() => {
                            toast.error("Отключает все активные объявления");
                        }}
                    >
                        ?
                    </button>
                </span>,
                "Выкупов",
                "Просмотры",
                "Выкупы",
                "Конверсия",
                "Объявлений",
            ]}
            pagination={pagination}
            bodyCls={cn(cls.body)}
            bodyRowCls={cn(cls.body_row)}
            className={cn(cls.wrapper, [className])}
            headCls={cn(cls.head)}
            headCol={cn(cls.head_col)}
            headRowCls={cn(cls.head_row)}
            tableCls={cn(cls.table)}
            tableWrapperCls={cn(cls.table_wrapper)}
        />
    );
};

export { HomeProductsContent };
