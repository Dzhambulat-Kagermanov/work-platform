"use client";
import { useInfiniteQuery } from "@tanstack/react-query";
import { apiService } from "@/services";
import { QueryItem } from "@/types/client";
import { useFiltersStore } from "@/store";
import { mainPageFiltersSelector } from "@/store/useFiltersStore";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const useProductsListQuery = (limit = 24) => {
    const mainPageFilters = useFiltersStore(mainPageFiltersSelector);

    const [queryItems, setQueryItems] = useState<QueryItem[]>([]);

    const searchParams = useSearchParams();

    const queryItemsHandler = () => {
        const res: QueryItem[] = [];

        const search = searchParams.get("search");

        if (search) {
            res.push({
                key: "search",
                value: search,
            });
        }

        if (mainPageFilters.cashbackFrom) {
            res.push({
                key: "cashback_from",
                value: `${mainPageFilters.cashbackFrom}`,
            });
        }

        if (mainPageFilters.cashbackTo) {
            res.push({
                key: "cashback_to",
                value: `${mainPageFilters.cashbackTo}`,
            });
        }

        if (mainPageFilters.priceFrom) {
            res.push({
                key: "price_from",
                value: `${mainPageFilters.priceFrom}`,
            });
        }

        if (mainPageFilters.priceTo) {
            res.push({
                key: "price_to",
                value: `${mainPageFilters.priceTo}`,
            });
        }

        if (mainPageFilters.sortBy) {
            switch (mainPageFilters.sortBy) {
                case "PRICE_DESC":
                    res.push({
                        key: "sort",
                        value: "price_with_cashback",
                    });
                    res.push({
                        key: "order",
                        value: "desc",
                    });
                case "CASHBACK_AMOUNT":
                    res.push({
                        key: "sort",
                        value: "price_with_cashback",
                    });
                    res.push({
                        key: "order",
                        value: "desc",
                    });
                    break;
                case "POPULAR":
                    res.push({
                        key: "sort",
                        value: "popular",
                    });
                    res.push({
                        key: "order",
                        value: "desc",
                    });
                    break;
                case "PRODUCT_RATING":
                    res.push({
                        key: "sort",
                        value: "rating_product",
                    });
                    res.push({
                        key: "order",
                        value: "desc",
                    });
                    break;
                case "SELLER_RATING":
                    res.push({
                        key: "sort",
                        value: "rating_seller",
                    });
                    res.push({
                        key: "order",
                        value: "desc",
                    });
                    break;
                case "PUBLICATION_DATE":
                    res.push({
                        key: "sort",
                        value: "created_at",
                    });
                    res.push({
                        key: "order",
                        value: "desc",
                    });
            }
        }

        // routerReplaceQueryHandler(router, pathname, res);
        setQueryItems(res);
    };

    useEffect(() => {
        queryItemsHandler();
    }, [mainPageFilters]);

    return useInfiniteQuery({
        queryKey: ["products-list", queryItems],
        queryFn: async ({ pageParam }) => {
            // Добавляем параметры пагинации
            const paginationParams: QueryItem[] = [
                { key: 'page', value: `${pageParam}` },
                { key: 'limit', value: `${limit}` }
            ];
            
            // Объединяем все параметры запроса
            const allParams = [...(queryItems || []), ...paginationParams];
            
            // Запрос к API
            const res = await apiService.products.getProductsList(allParams);
            return res;
        },
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => {
            // Проверяем, есть ли ещё страницы для загрузки
            if (!lastPage) return undefined;
            
            const totalItems = lastPage.total || 0;
            const loadedItemsCount = allPages.reduce((count, page) => {
                return count + (page?.data?.length || 0);
            }, 0);
            
            // Если загружены все товары, больше страниц нет
            if (loadedItemsCount >= totalItems) {
                return undefined;
            }
            
            // Иначе возвращаем номер следующей страницы
            return allPages.length + 1;
        },
        staleTime: 30_000,
        retry: 3,
    });
};

export default useProductsListQuery;
