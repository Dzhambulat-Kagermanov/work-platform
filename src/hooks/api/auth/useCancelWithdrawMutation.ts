import { apiService } from "@/services";
import { OrderWithdrawalData } from "@/services/AuthService";
import { useMutation } from "@tanstack/react-query";

const useOrderWithdrawMutation = () =>
    useMutation({
        mutationKey: ["create-withdraw"],
        mutationFn: async (id: string) => {
            const res = await apiService.auth.cancelWithdrawal(id);

            return res;
        },
    });

export default useOrderWithdrawMutation;
