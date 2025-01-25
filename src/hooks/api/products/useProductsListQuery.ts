"use client"
import { useQuery } from "@tanstack/react-query";
import { apiService } from "@/services";
import { QueryItem } from "@/types/client";
import { useFiltersStore } from "@/store";
import { mainPageFiltersSelector } from "@/store/useFiltersStore";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const useProductsListQuery = () => {
    const router = useRouter();
    const mainPageFilters = useFiltersStore(mainPageFiltersSelector);

    const [queryItems, setQueryItems] = useState<QueryItem[]>([]);

    // const pathname = usePathname();

    const queryItemsHandler = () => {

        const res: QueryItem[] = [];

        if (mainPageFilters.cashbackFrom) {
            res.push({
                key: "cashback_from",
                value: `${mainPageFilters.cashbackFrom}`
            });
        }

        if (mainPageFilters.cashbackTo) {
            res.push({
                key: "cashback_to",
                value: `${mainPageFilters.cashbackTo}`
            });
        }

        if (mainPageFilters.priceFrom) {
            res.push({
                key: "price_from",
                value: `${mainPageFilters.priceFrom}`
            });
        }

        if (mainPageFilters.priceTo) {
            res.push({
                key: "price_to",
                value: `${mainPageFilters.priceTo}`
            });
        }

        if (mainPageFilters.sortBy) {
            switch(mainPageFilters.sortBy) {
                case "PRICE_DESC":
                case "CASHBACK_AMOUNT":
                    res.push({
                        key: "price_with_cashback",
                        value: "desc"
                    });
                    break;
                case "POPULAR":
                    res.push({
                        key: "popular",
                        value: "desc"
                    });
                    break;
                case "PRODUCT_RATING":
                    res.push({
                        key: "rating_product",
                        value: "desc"
                    });
                    break;
                case "SELLER_RATING":
                    res.push({
                        key: "rating_seller",
                        value: "desc"
                    });
                    break;
                case "PUBLICATION_DATE":
                    res.push({
                        key: "created_at",
                        value: "desc"
                    });
                    break;
            }
        }

        


        // routerReplaceQueryHandler(router, pathname, res);
        setQueryItems(res);

    }

    useEffect(() => {
        queryItemsHandler();
    }, [mainPageFilters]);

    return useQuery({
        queryKey: [
            "products-list",
            queryItems,
        ],
        queryFn: async () => {
            const res = await apiService.products.getProductsList(queryItems || []);
            return res;
        },
        staleTime: 30_000,
        retry: 3,
    });
};

export default useProductsListQuery;
