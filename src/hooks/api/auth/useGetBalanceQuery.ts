import { apiService } from "@/services";
import { useQuery } from "@tanstack/react-query";

const useGetBalanceQuery = () =>
    useQuery({
        queryKey: ["profile-balance"],
        queryFn: async () => {
            const res = await apiService.auth.getBalance();

            return res;
        },
        staleTime: 45_000,
        retry: false,
    });

export default useGetBalanceQuery;
