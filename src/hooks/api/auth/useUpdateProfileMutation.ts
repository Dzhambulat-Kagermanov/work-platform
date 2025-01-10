import { setQuerySessionDataHandler } from "@/lib";
import { apiService } from "@/services";
import { UpdateProfileData } from "@/services/AuthService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

const useUpdateProfileMutation = () => {

    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ["update-profile"],
        mutationFn: async (data: UpdateProfileData) => {
            const res = await apiService.auth.updateProfile(data);

            return res;
        },
        onSuccess: (data) => {
            setQuerySessionDataHandler(queryClient, data);
            toast.success("Данные успешно обновлены");
        },
        onError: (e: Error) => {
            const error = e as AxiosError<{ message: string }>;
            toast.error(error.response?.data?.message ?? "Не удалось обновить данные");
        },
    })
}

export default useUpdateProfileMutation;