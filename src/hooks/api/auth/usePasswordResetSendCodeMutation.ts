import { serverErrorToastHandler } from "@/handlers";
import { apiService } from "@/services";
import { useMutation } from "@tanstack/react-query";

const usePasswordResetSendCodeMutation = () =>
    useMutation({
        mutationKey: ["password-reset-send-code"],
        mutationFn: async (phone: string) => {
            const res = await apiService.auth.passwordResetSendCode(phone);
            return res;
        },
        onError: (e) => {
            serverErrorToastHandler(e, "Не удалось отправить код");
        },
    });

export default usePasswordResetSendCodeMutation;
