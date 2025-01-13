import { apiService } from "@/services";
import { OrderWithdrawalData } from "@/services/AuthService";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

const useOrderWithdrawMutation = () =>
    useMutation({
        mutationKey: ["create-withdraw"],
        mutationFn: async (data: OrderWithdrawalData) => {
            const res = await apiService.auth.orderWithdrawal(data);

            return res;
        },
        onError: (e: Error) => {
            const error = e as AxiosError<{ message: string }>;
            toast.error(
                error.response?.data?.message ??
                    "Не удалось создать заявку на вывод",
            );
        },
    });

export default useOrderWithdrawMutation;
