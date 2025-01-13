import { apiService } from "@/services";
import { PasswordResetData } from "@/services/AuthService";
import { useMutation } from "@tanstack/react-query";

const usePasswordResetSendCodeMutation = () => (
    useMutation({
        mutationKey: ["password-reset-send-code"],
        mutationFn: async (phone: string) => {
            const res = await apiService.auth.passwordResetSendCode(phone);
            return res;
        }
    })
);

export default usePasswordResetSendCodeMutation;