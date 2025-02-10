import { apiService } from "@/services";
import { useQuery } from "@tanstack/react-query";

export const SELLER_PRODUCTS_QUERY_KEY = "seller-products";

const useGetSellerProductsQuery = (query?: string) => {
    return useQuery({
        queryKey: [SELLER_PRODUCTS_QUERY_KEY],
        queryFn: async () => {
            const res = await apiService.seller.getProducts(query);

            return res;
        },
        staleTime: 180_000,
        retry: 3,
    });
};

export default useGetSellerProductsQuery;
