import { useQuery } from "@tanstack/react-query";
import { apiService } from "@/services";
const useCategoriesQuery = () => (
    useQuery({
        queryKey: ["categories"],
        queryFn: async () => {
            const res = await apiService.categories.getCategories();

            return res;
        },
        staleTime: Infinity,
        retry: false,
    })
)

export default useCategoriesQuery;