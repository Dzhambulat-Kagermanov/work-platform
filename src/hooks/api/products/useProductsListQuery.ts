import { useQuery } from "@tanstack/react-query";
import { apiService } from "@/services";

const useProductsListQuery = () =>
{
    

    return useQuery({
        queryKey: [
            "products-list",
            // ...query.map((el) => `products-list-${el.key}=${el.value}`),
        ],
        queryFn: async () => {
            const res = await apiService.products.getProductsList([]);
            return res;
        },
        staleTime: 30_000,
    });
}

export default useProductsListQuery;
