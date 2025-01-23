import { apiService } from "@/services";
import { useQuery } from "@tanstack/react-query";

const useTariffByRansomsQuery = (ransoms: string) =>
    useQuery({
        queryKey: ["tariff-by-ransoms", `tariff-by-ransoms-${ransoms}`],
        queryFn: async () => {
            const res = await apiService.tariffs.getTariffByRansoms(ransoms);

            return res;
        },
        staleTime: 120_000,
        retry: 3,
    });

export default useTariffByRansomsQuery;
