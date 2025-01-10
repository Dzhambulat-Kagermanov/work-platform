import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiService } from "@/services";
import { LoginData } from "@/services/AuthService";
import { sessionQueryKeys } from "./useSessionQuery";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/constants";

const useLoginMutation = () => {
    const router = useRouter();
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ["auth-login"],
        mutationFn: async (data: LoginData) => {
            const res = await apiService.auth.login(data);

            return res;
        },
        onSuccess: (data) => {
            const role = data.user.role.slug;
            router.push(
                role === "buyer"
                    ? ROUTES.BUYER.ACCOUNT.VALUE
                    : ROUTES.SALESMAN.PROFILE,
            );
            queryClient.setQueryData(sessionQueryKeys, data.user);
            toast.success("Авторизация прошла успешно");
        },
        onError: () => {
            toast.error("Не удалось авторизоваться");
        },
    });
};

export default useLoginMutation;
