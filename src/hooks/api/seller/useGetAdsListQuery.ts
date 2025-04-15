import { apiService } from "@/services";
import {
    filterQueryAdsSelector,
    useSalesmanActionsFilter,
} from "@/store/useSalesmanActionsFilter";
import { QueryItem } from "@/types/client";
import { useQuery } from "@tanstack/react-query";

export const ADS_LIST_QUERY_KEY = ["ads-list"];

const useGetAdsListQuery = (query: QueryItem[]) => {
    const filterQuery = useSalesmanActionsFilter(filterQueryAdsSelector);

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

    return useQuery({
        queryKey: [
            ...ADS_LIST_QUERY_KEY,
            `ads-list-${query}`,
            filterQuery || "all",
        ],
        queryFn: async () => {
            const res = await apiService.seller.getAdsList([
                ...query,
                ...(filterQueryItem ? [filterQueryItem] : []),
            ]);

            return res;
        },
        staleTime: 120_000,
        retry: 3,
    });
};

export default useGetAdsListQuery;
