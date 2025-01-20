import { apiService } from "@/services";
import { useQuery } from "@tanstack/react-query";

const useGetAdsListQuery = (query?: string) =>
    useQuery({
        queryKey: ["ads-list", `ads-list-${query}`],
        queryFn: async () => {
            const res = await apiService.seller.getAdsList(query);

            return res;
        },
        staleTime: 120_000,
        retry: 3,
    });

export default useGetAdsListQuery;
