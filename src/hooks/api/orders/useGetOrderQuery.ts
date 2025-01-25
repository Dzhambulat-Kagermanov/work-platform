import { apiService } from "@/services";
import { useQuery } from "@tanstack/react-query";

const useGetOrderQuery = (id?: number) => (
    useQuery({
        queryKey: ["order-detail", `order-detail-${id}`],
        queryFn: async () => {
            const res = await apiService.orders.getOrder(id);

            return res;
        },
        staleTime: 90_000,
        retry: 2,
    })
);

export default useGetOrderQuery;