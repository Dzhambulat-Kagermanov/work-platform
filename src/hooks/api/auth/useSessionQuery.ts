import { apiService } from "@/services";
import { useQuery } from "@tanstack/react-query";

export const sessionQueryKeys = ["auth-session"];

const useSessionQuery = () =>
    useQuery({
        queryKey: sessionQueryKeys,
        queryFn: async () => {
            const res = await apiService.auth.getSession();

            return res;
        },
        staleTime: Infinity,
        retry: false,
    });

export default useSessionQuery;
