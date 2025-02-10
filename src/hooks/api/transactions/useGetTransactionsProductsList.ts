import { apiService } from "@/services";
import { useQuery } from "@tanstack/react-query";

export const GET_TRANSACTIONS_PRODUCTS_LIST_QUERY_KEY = "transactions-products-list";

const useGetTransactionsProductsList = () => {
    return useQuery({
        queryKey: [GET_TRANSACTIONS_PRODUCTS_LIST_QUERY_KEY],
        queryFn: async () => {
            const res = await apiService.transactions.getTransactionsProductsList();

            return res;
        }
    });
}

export default useGetTransactionsProductsList;