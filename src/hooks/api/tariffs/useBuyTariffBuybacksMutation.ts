import { apiService } from "@/services";
import { BuyTariffBuybacksData } from "@/services/TariffsService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { PROFILE_BALANCE_QUERY_KEY } from "../auth/useGetBalanceQuery";

const useBuyTariffBuybacksMutation = () => {

    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ["buy-tariff-buybacks"],
        mutationFn: async (data: BuyTariffBuybacksData) => {
            const res = await apiService.tariffs.buyTariffBuybacks(data);

            if (res.status !== 200) {
                throw Error();
            }

            return res;
        }, 
        onSuccess: () => {
            toast.success("Выкупы успешно получены");
            queryClient.invalidateQueries({ queryKey: PROFILE_BALANCE_QUERY_KEY });
        },
        onError: () => {
            toast.error("Не удалось получить выкупы");
        }
    });

}

export default useBuyTariffBuybacksMutation;