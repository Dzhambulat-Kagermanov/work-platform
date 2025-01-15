import { useQuery } from "@tanstack/react-query";
import { apiService } from "@/services";
const useProductItemQuery = (id: string) =>
    useQuery({
        queryKey: ["product-item", `product-item-${id}`],
        queryFn: async () => {
            const res = await apiService.products.getProductItem(id);
            return res;
        },
        staleTime: 60_000,
        retry: 3,
    });

export default useProductItemQuery;
