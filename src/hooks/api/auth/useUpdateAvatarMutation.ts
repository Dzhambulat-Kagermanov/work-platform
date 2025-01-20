import { serverErrorToastHandler } from "@/handlers";
import { apiService } from "@/services";
import { UpdateProfileAvatarData } from "@/services/AuthService";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const useUpdateAvatarMutation = () => {
    return useMutation({
        mutationKey: ["update-profile"],
        mutationFn: async (data: UpdateProfileAvatarData) => {
            const res = await apiService.auth.updateAvatar(data);

            return res;
        },
        onSuccess: () => {
            toast.success("Аватар успешно обновлен");
        },
        onError: (e) => {
            serverErrorToastHandler(e, "Не удалось обновить аватар");
        },
    });
};

export default useUpdateAvatarMutation;
