import { serverErrorToastHandler } from "@/handlers";
import { apiService } from "@/services";
import { RegisterVerifyCodeData } from "@/services/AuthService";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const useRegisterVerifyCodeMutation = () =>
    useMutation({
        mutationKey: ["auth-verify-code"],
        mutationFn: async (data: RegisterVerifyCodeData) => {
            const res = await apiService.auth.verifyCode(data);

            return res;
        },
        onSuccess: () => {
            toast.success("Код успешно подтвержден");
        },
        onError: (e) => {
            serverErrorToastHandler(e, "Не удалось подтвердить код");
        },
    });

export default useRegisterVerifyCodeMutation;
