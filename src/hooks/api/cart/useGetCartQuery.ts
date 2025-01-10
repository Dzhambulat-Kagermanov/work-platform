import { useQuery } from "@tanstack/react-query";
import { apiService } from "@/services";

export const getCartKey = ["cart-list"];

const useGetCartQuery = () =>
    useQuery({
        queryKey: getCartKey,
        queryFn: async () => {
            const res = await apiService.cart.getCart();

            return res.cart;
        },
        staleTime: Infinity,
        retry: false,
    });

export default useGetCartQuery;
