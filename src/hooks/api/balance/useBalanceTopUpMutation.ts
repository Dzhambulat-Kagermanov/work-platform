import { apiService } from "@/services";
import { useMutation } from "@tanstack/react-query";

const useBalanceTopUpMutation = () => (
    useMutation({
        mutationKey: ["balance-top-up"],
        mutationFn: async (amount: string) => {
            const res = await apiService.balance.topUpBalance(amount);

            return res;
        }
    })
)

export default useBalanceTopUpMutation;