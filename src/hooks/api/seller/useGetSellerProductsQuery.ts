import { apiService } from "@/services";
import { useQuery } from "@tanstack/react-query";

const useGetSellerProductsQuery = (query?: string) => {
    return useQuery({
        queryKey: ["seller-products"],
        queryFn: async () => {
            const res = await apiService.seller.getProducts(query);

            return res;
        },
        staleTime: 180_000,
        retry: 3,
    });
};

export default useGetSellerProductsQuery;
