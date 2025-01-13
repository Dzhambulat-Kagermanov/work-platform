import { apiService } from "@/services";
import { useQuery } from "@tanstack/react-query";

const useGetTransactionsQuery = (query?: string) =>
    useQuery({
        queryKey: ["transactions", `transactions-${query}`],
        queryFn: async () => {
            const res = await apiService.auth.getTransactions(query);

            return res;
        },
        staleTime: 180_000,
        retry: false,
    });

export default useGetTransactionsQuery;
