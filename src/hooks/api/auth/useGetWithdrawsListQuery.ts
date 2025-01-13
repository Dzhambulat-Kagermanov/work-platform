import { apiService } from "@/services";
import { useQuery } from "@tanstack/react-query";

const useGetWithdrawsListQuery = () =>
    useQuery({
        queryKey: ["user-withdraws"],
        queryFn: async () => {
            const res = await apiService.auth.getWithdraws();

            return res;
        },
    });

export default useGetWithdrawsListQuery;
