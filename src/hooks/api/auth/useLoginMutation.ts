import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiService } from "@/services";
import { LoginData } from "@/services/AuthService";
import { sessionQueryKeys } from "./useSessionQuery";

const useLoginMutation = () =>
   {

    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ["auth-login"],
        mutationFn: async (data: LoginData) => {
            const res = await apiService.auth.login(data);

            return res;
        },
        onSuccess: (data) => {
            queryClient.setQueryData(sessionQueryKeys, data.user);
        }
    });
   }

export default useLoginMutation;
