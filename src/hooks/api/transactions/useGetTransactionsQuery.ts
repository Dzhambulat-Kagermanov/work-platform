import { apiService } from "@/services";
import { QueryItem } from "@/types/client";
import { useQuery } from "@tanstack/react-query";

const useGetTransactionsQuery = (query: QueryItem[]) =>
    useQuery({
        queryKey: ["transactions", `transactions-${query}`],
        queryFn: async () => {
            const res = await apiService.transactions.getTransactions(query);

            return res;
        },
        staleTime: 180_000,
        retry: false,
    });

export default useGetTransactionsQuery;
