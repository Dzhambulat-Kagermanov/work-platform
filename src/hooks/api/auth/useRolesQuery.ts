import { apiService } from "@/services";
import { useQuery } from "@tanstack/react-query";

const useRolesQuery = () =>
    useQuery({
        queryKey: ["user-roles"],
        queryFn: async () => {
            const res = await apiService.auth.getRoles();

            return res;
        },
        staleTime: Infinity,
        retry: false,
    });

export default useRolesQuery;
