import { apiService } from "@/services";
import { useQuery } from "@tanstack/react-query";

const useGetSellerQuery = (id: string) =>
    useQuery({
        queryKey: ["seller-query", `seller-query-${id}`],
        queryFn: async () => {
            const res = await apiService.users.getSellerById(id);
            return res;
        },
    });

export default useGetSellerQuery;
