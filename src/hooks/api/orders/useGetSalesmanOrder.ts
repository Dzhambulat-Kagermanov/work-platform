import { apiService } from "@/services";
import { useQuery } from "@tanstack/react-query";

export const GET_SALESMAN_ORDERS = (id?: number) => [
    "order-detail",
    `order-detail-${id}`,
];

export const useGetSalesmanOrder = ({ buybackId }: { buybackId: number }) =>
    useQuery({
        queryKey: GET_SALESMAN_ORDERS(buybackId),
        queryFn: () => apiService.orders.getSalesmanOrder(buybackId),
        enabled: buybackId !== undefined,
    });
