import { apiService } from "@/services";
import { useQuery } from "@tanstack/react-query";

const useGetBuyerQuery = (id: string) =>
    useQuery({
        queryKey: ["buyer-query", `buyer-query-${id}`],
        queryFn: async () => {
            const res = await apiService.users.getBuyerById(id);
            return res;
        },
    });

export default useGetBuyerQuery;
