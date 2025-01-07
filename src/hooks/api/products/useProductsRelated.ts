import { useQuery } from "@tanstack/react-query";
import { apiService } from "@/services";
const useProductsRelated = (id: string) => (
    useQuery({
        queryKey: ["products-related", `products-related-${id}`],
        queryFn: async () => {
            const res = await apiService.products.getProductsRelated(id);

            return res;
        },
        retry: false,
        staleTime: 60_000,
    })
);

export default useProductsRelated;