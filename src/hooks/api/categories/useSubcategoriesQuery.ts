import { apiService } from "@/services";
import { useQuery } from "@tanstack/react-query";

const useSubcategoriesQuery = (id: number) => (
    useQuery({
        queryKey: ["subcategories", `subcategory-${id}`],
        queryFn: async () => {
            if (isNaN(id)) {
                return null;
            }
            const res = await apiService.categories.getSubCategories(String(id));

            return res;
        }
    })
);

export default useSubcategoriesQuery;