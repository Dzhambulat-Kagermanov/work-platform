import { serverErrorToastHandler } from "@/handlers";
import { apiService } from "@/services";
import { OrderWithdrawalData } from "@/services/AuthService";
import { useMutation } from "@tanstack/react-query";

const useOrderWithdrawMutation = () =>
    useMutation({
        mutationKey: ["create-withdraw"],
        mutationFn: async (data: OrderWithdrawalData) => {
            const res = await apiService.auth.orderWithdrawal(data);

            return res;
        },
        onError: (e) => {
            serverErrorToastHandler(e, "Не удалось создать заявку на вывод");
        },
    });

export default useOrderWithdrawMutation;
