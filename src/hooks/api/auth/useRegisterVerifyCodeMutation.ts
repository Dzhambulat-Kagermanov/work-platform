import { apiService } from "@/services";
import { RegisterVerifyCodeData } from "@/services/AuthService";
import { useMutation } from "@tanstack/react-query";

const useRegisterVerifyCodeMutation = () =>
    useMutation({
        mutationKey: ["auth-verify-code"],
        mutationFn: async (data: RegisterVerifyCodeData) => {
            const res = await apiService.auth.verifyCode(data);

            return res;
        },
    });

export default useRegisterVerifyCodeMutation;
