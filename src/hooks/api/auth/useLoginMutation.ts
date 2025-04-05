import {
    MutationFunction,
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";
import { apiService } from "@/services";
import { LoginData } from "@/services/AuthService";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/constants";
import { setQuerySessionDataHandler } from "@/lib";
import { AxiosError } from "axios";
import { User } from "@/types/api";

const useLoginMutation = (params?: {
    withoutErrorToast?: boolean;
    noRedirectOnSuccess?: boolean;
}) => {
    const router = useRouter();
    const queryClient = useQueryClient();

    return useMutation<
        {
            user: User;
            token: string;
            message?: string;
        },
        AxiosError<{
            message: string;
        }>,
        LoginData
    >({
        mutationKey: ["auth-login"],
        mutationFn: async (data: LoginData) => {
            const res = await apiService.auth.login(data);

            return res;
        },
        onSuccess: (data) => {
            const role = data.user.role.slug;
            if (!params?.noRedirectOnSuccess)
                router.push(
                    role === "buyer"
                        ? ROUTES.BUYER.ACCOUNT.VALUE
                        : ROUTES.SALESMAN.PROFILE,
                );
            setQuerySessionDataHandler(queryClient, data.user);
            toast.success("Авторизация прошла успешно");
        },
        onError: (error) => {
            if (!params?.withoutErrorToast)
                toast.error("Не удалось авторизоваться");
        },
    });
};

export default useLoginMutation;
