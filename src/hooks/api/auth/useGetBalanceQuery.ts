import { apiService } from "@/services";
import { useQuery } from "@tanstack/react-query";

export const PROFILE_BALANCE_QUERY_KEY = ["profile-balance"]

const useGetBalanceQuery = () =>
    useQuery({
        queryKey: PROFILE_BALANCE_QUERY_KEY,
        queryFn: async () => {
            const res = await apiService.auth.getBalance();

            return res;
        },
        staleTime: 45_000,
        retry: false,
    });

export default useGetBalanceQuery;
