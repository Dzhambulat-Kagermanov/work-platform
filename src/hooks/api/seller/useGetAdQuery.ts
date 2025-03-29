import { apiService } from "@/services";
import { useQuery } from "@tanstack/react-query";

const useGetAdQuery = (id: number) =>
    useQuery({
        queryKey: ["seller-ad", `seller-ad-${id}`],
        queryFn: async () => {
            const res = await apiService.seller.getAd(id);

            return res;
        },
        staleTime: 120_000,
        retry: 3,
    });

export default useGetAdQuery;
