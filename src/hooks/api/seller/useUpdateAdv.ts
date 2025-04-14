import { apiService } from "@/services";
import { useMutation } from "@tanstack/react-query";

export const UPDATE_ADV_KEY = ["adv"];

export const useUpdateAdv = () => {
    return useMutation({
        mutationKey: UPDATE_ADV_KEY,
        mutationFn: apiService.seller.updateAdv,
    });
};
