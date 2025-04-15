import { apiService } from "@/services";
import {
    filterProductsQuerySelector,
    useSalesmanActionsFilter,
} from "@/store/useSalesmanActionsFilter";
import { QueryItem } from "@/types/client";
import { useQuery } from "@tanstack/react-query";

export const SELLER_PRODUCTS_QUERY_KEY = "seller-products";

const useGetSellerProductsQuery = (query: QueryItem[]) => {
    const filterQuery = useSalesmanActionsFilter(filterProductsQuerySelector);

    let filterQueryItem: QueryItem | undefined = undefined;

    switch (filterQuery) {
        case "active":
            filterQueryItem = {
                key: "status",
                value: "1",
            };
            break;
        case "stop":
            filterQueryItem = {
                key: "status",
                value: "0",
            };
            break;
        case "archive":
            filterQueryItem = {
                key: "is_archived",
                value: "true",
            };
            break;
    }

    console.log({ filterQueryItem, filterQuery });

    return useQuery({
        queryKey: [
            SELLER_PRODUCTS_QUERY_KEY,
            `${SELLER_PRODUCTS_QUERY_KEY}${query}`,
            filterQuery || "all",
        ],
        queryFn: async () => {
            const res = await apiService.seller.getProducts([
                ...query,
                ...(filterQueryItem ? [filterQueryItem] : []),
            ]);

            return res;
        },
        staleTime: 180_000,
    });
};

export default useGetSellerProductsQuery;
