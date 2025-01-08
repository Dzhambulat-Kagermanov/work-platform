import { apiService } from "@/services";
import { RegisterSendCodeData } from "@/services/AuthService";
import { User } from "@/types/api";
import { useMutation } from "@tanstack/react-query";

const useRegisterSendCodeMutation = () =>
    useMutation({
        mutationKey: ["register-send-code"],
        mutationFn: async (data: RegisterSendCodeData) => {
            const res = await apiService.auth.sendCode(data)
        },
    });

export default useRegisterSendCodeMutation;
