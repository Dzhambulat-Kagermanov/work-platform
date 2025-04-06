import { apiService } from "@/services";
import { useQuery } from "@tanstack/react-query";

export const GET_ORDER_KEY = (id?: number) => [
    "order-detail",
    `order-detail-${id}`,
];

const useGetOrderQuery = (id?: number) =>
    useQuery({
        queryKey: GET_ORDER_KEY(id),
        queryFn: async () => {
            const res = await apiService.orders.getOrder(id);

            return res;
        },
        staleTime: 90_000,
        retry: 2,
    });

export default useGetOrderQuery;
