import { QueryItem } from "@/types/client";
import { useQuery } from "@tanstack/react-query";
import { apiService } from "@/services";

const useProductsList = (query: QueryItem[]) => (
    useQuery({
        queryKey: ["products-list", ...query.map((el) => (`products-list-${el.key}=${el.value}`))],
        queryFn: async () => {
            const res = await apiService.products.getProductsList(query);

            return res;
        },
        staleTime: 30_000,
    })
);

export default useProductsList;