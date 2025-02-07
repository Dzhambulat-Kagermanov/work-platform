import { apiService } from "@/services";
import { useQuery } from "@tanstack/react-query";

const useGetWbProductQuery = (id: string) => (
    useQuery({
        queryKey: ["wb-product-query", `wb-product-id-${id}`],
        queryFn: async () => {
            const res = await apiService.seller.getSellerWbProduct(id);

            return res;
        },
        staleTime: 90_000,
        retry: 3,
    })
);

export default useGetWbProductQuery;