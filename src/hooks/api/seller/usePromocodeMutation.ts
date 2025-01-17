import { apiService } from "@/services";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const usePromocodeMutation = () =>
    useMutation({
        mutationKey: ["promocode-send"],
        mutationFn: async (promocode: string) => {
            const res = await apiService.seller.applyPromocode(promocode);

            return res;
        },
        onSuccess: (res) => {
            toast.success(res.data.message);
        },
    });

export default usePromocodeMutation;
