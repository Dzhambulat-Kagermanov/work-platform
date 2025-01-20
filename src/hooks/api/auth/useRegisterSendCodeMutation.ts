import { serverErrorToastHandler } from "@/handlers";
import { apiService } from "@/services";
import { RegisterSendCodeData } from "@/services/AuthService";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

const useRegisterSendCodeMutation = () =>
    useMutation({
        mutationKey: ["register-send-code"],
        mutationFn: async (data: RegisterSendCodeData) => {
            const res = await apiService.auth.sendCode(data);

            return res;
        },
        onSuccess: () => {
            toast.success("Код отправлен");
        },
        onError: (e) => {
            serverErrorToastHandler(e, "Не удалось отправить код");
        },
    });

export default useRegisterSendCodeMutation;
