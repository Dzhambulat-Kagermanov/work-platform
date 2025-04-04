import { apiService } from "@/services";
import { QueryItem } from "@/types/client";
import { useQuery } from "@tanstack/react-query";

export const ADS_LIST_QUERY_KEY = "ads-list";

const useGetAdsListQuery = (query: QueryItem[]) =>
    useQuery({
        queryKey: [ADS_LIST_QUERY_KEY, `ads-list-${query}`],
        queryFn: async () => {
            const res = await apiService.seller.getAdsList(query);

            return res;
        },
        staleTime: 120_000,
        retry: 3,
    });

export default useGetAdsListQuery;
