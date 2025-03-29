import { apiService } from "@/services";
import { RegisterCompleteData } from "@/services/AuthService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { sessionQueryKeys } from "./useSessionQuery";
import { setQuerySessionDataHandler } from "@/lib";
import { serverErrorToastHandler } from "@/handlers";

const useRegisterEndMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationKey: ["auth-register-end"],
        mutationFn: async (data: RegisterCompleteData) => {
            const res = await apiService.auth.registerComplete(data);
            return res;
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: sessionQueryKeys });
            queryClient.setQueryData(sessionQueryKeys, data.user);
            toast.success("Регистрация завершена успешно");
        },
        onError: (e) => {
            serverErrorToastHandler(e, "Не удалось завершить регистрацию");
        },
    });
};

export default useRegisterEndMutation;
