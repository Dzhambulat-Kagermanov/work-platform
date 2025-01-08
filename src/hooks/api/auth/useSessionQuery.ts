import { apiService } from "@/services";
import { useQuery } from "@tanstack/react-query";

const useSessionQuery = () =>
    useQuery({
        queryKey: ["auth-session"],
        queryFn: async () => {
            const res = await apiService.auth.getSession();

            return res;
        },
        staleTime: Infinity,
        retry: false,
    });

export default useSessionQuery;
