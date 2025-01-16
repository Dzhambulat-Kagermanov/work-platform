import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { PRODUCTS } from "./constants/products";
import cls from "./index.module.scss";
import { HomeTable } from "../HomeTable";
import { ProductsTableBodyItem } from "@/components/entities/ProductsTableBodyItem";
import { useGetSellerProductsQuery } from "@/hooks/api/seller";
import { PageLoader } from "@/components/ui/loaders";

interface Props extends TClassName {}
const HomeProductsContent: FC<Props> = ({ className }) => {
    const { data: products, isLoading } = useGetSellerProductsQuery();

    if (isLoading) {
        return <PageLoader />;
    }

    if (!products || !products.length) {
        return (
            <div className="p-2 text-center flex items-center justify-center">
                <p>В данный момент товаров нет</p>
            </div>
        );
    }

    return (
        <HomeTable
            body={products.map((item, index) => (
                <ProductsTableBodyItem item={item} key={index} />
            ))}
            head={[
                "Товар",
                "Статус",
                "Выкупов",
                "Просмотры",
                "Выкупы",
                "Конверсия",
                "Объявлений",
            ]}
            pagination={{
                pages: {
                    current: 1,
                    max: 10,
                },
            }}
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
