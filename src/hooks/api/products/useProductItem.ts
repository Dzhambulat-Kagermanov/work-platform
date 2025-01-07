import { useQuery } from "@tanstack/react-query";
import { apiService } from "@/services";
const useProductItem = (id: string) => (
    useQuery({
        queryKey: ["product-item", `product-item-${id}`],
        queryFn: async () => {
            const res = await apiService.products.getProductItem(id);
            return res;
        },
        staleTime: 60_000,
    })
);

export default useProductItem;