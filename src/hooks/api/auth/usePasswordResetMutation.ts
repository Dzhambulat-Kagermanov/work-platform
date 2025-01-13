import { apiService } from "@/services";
import { PasswordResetData } from "@/services/AuthService";
import { useMutation } from "@tanstack/react-query";

const usePasswordResetMutation = () => (
    useMutation({
        mutationKey: ["password-reset"],
        mutationFn: async (data: PasswordResetData) => {
            const res = await apiService.auth.passwordReset(data);
            return res;
        }
    })
);

export default usePasswordResetMutation;