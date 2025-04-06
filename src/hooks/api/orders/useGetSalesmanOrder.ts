import { apiService } from "@/services";
import { useQuery } from "@tanstack/react-query";

export const GET_SALESMAN_ORDERS = (buybackId: number) => [
    "salesman",
    `order-${buybackId}`,
];

export const useGetSalesmanOrder = ({ buybackId }: { buybackId: number }) =>
    useQuery({
        queryKey: GET_SALESMAN_ORDERS(buybackId),
        queryFn: () => apiService.orders.getSalesmanOrder(buybackId),
        enabled: buybackId !== undefined,
    });
