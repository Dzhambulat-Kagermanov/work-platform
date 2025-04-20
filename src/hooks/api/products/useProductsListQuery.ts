"use client";
import { useInfiniteQuery, InfiniteData } from "@tanstack/react-query";
import { apiService } from "@/services";
import { QueryItem } from "@/types/client";
import { Product, PaginationData } from "@/types/api";
import { useFiltersStore } from "@/store";
import { mainPageFiltersSelector } from "@/store/useFiltersStore";
import { useMemo } from "react";
import { useSearchParams } from "next/navigation";

const PRODUCTS_PER_PAGE = 20;

const useProductsListQuery = () => {
    const mainPageFilters = useFiltersStore(mainPageFiltersSelector);
    const searchParams = useSearchParams();

    const filterQueryItems = useMemo<QueryItem[]>(() => {
        const res: QueryItem[] = [];
        const search = searchParams.get("search");

        if (search) {
            res.push({ key: "search", value: search });
        }
        if (mainPageFilters.cashbackFrom) {
            res.push({ key: "cashback_from", value: `${mainPageFilters.cashbackFrom}` });
        }
        if (mainPageFilters.cashbackTo) {
            res.push({ key: "cashback_to", value: `${mainPageFilters.cashbackTo}` });
        }
        if (mainPageFilters.priceFrom) {
            res.push({ key: "price_from", value: `${mainPageFilters.priceFrom}` });
        }
        if (mainPageFilters.priceTo) {
            res.push({ key: "price_to", value: `${mainPageFilters.priceTo}` });
        }
        if (mainPageFilters.sortBy) {
            switch (mainPageFilters.sortBy) {
                case "PRICE_DESC":
                    res.push({ key: "sort", value: "price_with_cashback" });
                    res.push({ key: "order", value: "desc" });
                    break;
                case "CASHBACK_AMOUNT":
                    res.push({ key: "sort", value: "price_with_cashback" });
                    res.push({ key: "order", value: "desc" });
                    break;
                case "POPULAR":
                    res.push({ key: "sort", value: "popular" });
                    res.push({ key: "order", value: "desc" });
                    break;
                case "PRODUCT_RATING":
                    res.push({ key: "sort", value: "rating_product" });
                    res.push({ key: "order", value: "desc" });
                    break;
                case "SELLER_RATING":
                    res.push({ key: "sort", value: "rating_seller" });
                    res.push({ key: "order", value: "desc" });
                    break;
                case "PUBLICATION_DATE":
                    res.push({ key: "sort", value: "created_at" });
                    res.push({ key: "order", value: "desc" });
                    break;
            }
        }
        return res;
    }, [mainPageFilters, searchParams]);

    return useInfiniteQuery<
        PaginationData<Product[]>,
        Error,
        InfiniteData<PaginationData<Product[]>>,
        readonly [string, QueryItem[]],
        number
    >({
        queryKey: ["products-list", filterQueryItems],
        queryFn: async ({ pageParam = 1 }) => {
            const paginationQueryItems: QueryItem[] = [
                { key: "page", value: `${pageParam}` },
                { key: "limit", value: `${PRODUCTS_PER_PAGE}` },
            ];
            const res = await apiService.products.getProductsList([
                ...filterQueryItems,
                ...paginationQueryItems,
            ]);
            if (!res) {
                throw new Error("Failed to fetch products or API returned undefined.");
            }
            return res;
        },
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => {
            // Check if lastPage exists and has pagination info (current_page, total, per_page)
            if (lastPage && lastPage.current_page && lastPage.total && lastPage.per_page) {
                const lastPageNumber = Math.ceil(lastPage.total / lastPage.per_page);
                const nextPage = lastPage.current_page + 1;
                // Return next page number only if it's less than or equal to the calculated last page number
                return nextPage <= lastPageNumber ? nextPage : undefined;
            }
            // If pagination info is missing or calculation isn't possible, return undefined
            return undefined;
        },
        staleTime: 30_000,
        retry: 3,
    });
};

export default useProductsListQuery;
