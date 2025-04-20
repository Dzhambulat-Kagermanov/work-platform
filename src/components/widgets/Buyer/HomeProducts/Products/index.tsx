"use client";
import { FC, useEffect, useCallback, Fragment } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { ProductItem } from "@/components/entities/ProductItem";
import Link from "next/link";
import cls from "./index.module.scss";
import { ROUTES } from "@/constants";
import useProductsListQuery from "@/hooks/api/products/useProductsListQuery";
import { PageErrorStub } from "@/components/ui/page-error-stub";
import { PageLoader } from "@/components/ui/loaders";
import { Typography } from "@/components/ui";
import { Product, PaginationData } from "@/types/api";

function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
}

interface Props extends TClassName {}
const Products: FC<Props> = ({ className }) => {
    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isLoading,
        isError,
    } = useProductsListQuery();

    const handleScroll = useCallback(() => {
        const scrollThreshold = 500;
        if (
            window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - scrollThreshold &&
            hasNextPage &&
            !isFetchingNextPage
        ) {
            fetchNextPage();
        }
    }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

    const debouncedHandleScroll = useCallback(debounce(handleScroll, 200), [handleScroll]);

    useEffect(() => {
        window.addEventListener("scroll", debouncedHandleScroll);
        return () => {
            window.removeEventListener("scroll", debouncedHandleScroll);
        };
    }, [debouncedHandleScroll]);

    if (isLoading) {
        return <PageLoader />;
    }

    if (isError || !data) {
        console.error("Error fetching products:", error);
        return <PageErrorStub text="Ошибка загрузки товаров" />;
    }

    const noProductsFound = data.pages.length === 0 || data.pages.every((page: PaginationData<Product[]>) => page.data.length === 0);
    if (noProductsFound) {
        return <PageErrorStub text="Товары не найдены" />;
    }

    return (
        <>
            <ul className={cn(cls.wrapper, [className])}>
                {data.pages.map((group: PaginationData<Product[]>, i: number) => (
                    <Fragment key={i}>
                        {group.data.map((item: Product) => (
                            <Link
                                href={ROUTES.BUYER.PRODUCTS.ID(item.id.toString())}
                                key={item.id}
                            >
                                <ProductItem
                                    id={item.id}
                                    headCls={cn(cls.product_head)}
                                    name={item.product.name}
                                    tooltip={""}
                                    quantities={0}
                                    image={
                                        item.product.images &&
                                        item.product.images.length
                                            ? item.product.images[0]
                                            : ""
                                    }
                                    price={{
                                        price: Number(item.price_without_cashback),
                                        discount: Number(item.product.discount),
                                    }}
                                />
                            </Link>
                        ))}
                    </Fragment>
                ))}
            </ul>
            {isFetchingNextPage && (
                <div className={cls.loadingMore}>
                    <PageLoader className="h-auto min-h-0" />
                </div>
            )}
            {!hasNextPage && !isFetchingNextPage && !noProductsFound && (
                 <Typography tag="p" font="Inter-R" size={14} className={cls.endMessage}>
                    Больше товаров нет
                 </Typography>
            )}
        </>
    );
};

export { Products };
