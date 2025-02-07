import { serverErrorToastHandler } from "@/handlers";
import { apiService } from "@/services";
import { CreateAdvData } from "@/services/SellerService";
import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast";
import { ADS_LIST_QUERY_KEY } from "./useGetAdsListQuery";

const useCreateAdvMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationKey: ["create-adv-mutation"],
        mutationFn: async (data: CreateAdvData) => {
            const res = await apiService.seller.createAdv(data);

            return res;
        },
        onSuccess: () => {
            toast.success("Объявление успешно создано");
            queryClient.invalidateQueries({ queryKey: [ADS_LIST_QUERY_KEY] });
        },
        onError: (e) => {
            serverErrorToastHandler(e, "Не удалось создать объявление");
        },
    })
};

export default useCreateAdvMutation;