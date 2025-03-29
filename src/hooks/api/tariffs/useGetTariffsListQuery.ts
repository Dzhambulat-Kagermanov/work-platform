import { apiService } from "@/services";
import { useQuery } from "@tanstack/react-query";

const useGetTariffsListQuery = () =>
    useQuery({
        queryKey: ["tariffs"],
        queryFn: async () => {
            const res = await apiService.tariffs.getTariffsList();

            return res;
        },
        retry: 3,
        staleTime: Infinity,
    });

export default useGetTariffsListQuery;
