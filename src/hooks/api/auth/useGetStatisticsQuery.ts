import { apiService } from "@/services";
import { useQuery } from "@tanstack/react-query";

const useGetStatisticsQuery = () =>
    useQuery({
        queryKey: ["user-statistics"],
        queryFn: async () => {
            const res = await apiService.auth.getStatistic();

            return res;
        },
    });

export default useGetStatisticsQuery;
