import { apiService } from "@/services";
import { PasswordResetVerifyCodeData } from "@/services/AuthService";
import { useMutation } from "@tanstack/react-query";

const usePasswordResetVerifyCodeMutation = () => {
    return useMutation({
        mutationKey: ["reset-verify-code"],
        mutationFn: async (data: PasswordResetVerifyCodeData) => {
            const res = await apiService.auth.passwordResetVerifyCode(data);

            return res;
        },
    });
};

export default usePasswordResetVerifyCodeMutation;
