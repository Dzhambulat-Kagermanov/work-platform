import { apiService } from "@/services";
import { useQuery } from "@tanstack/react-query";

const useGetOrdersQuery = (query?: string) =>
    useQuery({
        queryKey: ["orders-list"],
        queryFn: async () => {
            const res = await apiService.orders.getOrders(query);

            return res;
        },
        staleTime: 30_000,
        retry: 3,
    });

export default useGetOrdersQuery;
