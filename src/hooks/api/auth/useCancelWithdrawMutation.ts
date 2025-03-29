import { serverErrorToastHandler } from "@/handlers";
import { apiService } from "@/services";
import { useMutation } from "@tanstack/react-query";

const useCancelWithdrawMutation = () =>
    useMutation({
        mutationKey: ["cancel-withdraw"],
        mutationFn: async (id: string) => {
            const res = await apiService.auth.cancelWithdrawal(id);

            return res;
        },
        onError: (e) => {
            serverErrorToastHandler(e, "Не удалось отменить запрос на вывод");
        },
    });

export default useCancelWithdrawMutation;
