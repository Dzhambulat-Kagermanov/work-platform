import { serverErrorToastHandler } from "@/handlers";
import { apiService } from "@/services";
import { AdsIdsData } from "@/services/SellerService";
import { useSellerStore } from "@/store";
import { resetAdIdsSelector } from "@/store/useSellerStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { ADS_LIST_QUERY_KEY } from "./useGetAdsListQuery";

const useStopAdsMutation = () => {
    const resetAdIds = useSellerStore(resetAdIdsSelector);
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ["seller-stop-ads"],
        mutationFn: async (data: AdsIdsData) => {
            const res = await apiService.seller.stopAds(data);

            return res;
        },
        onSuccess: () => {
            toast.success("Объявления успешно остановлены");
            resetAdIds();
            queryClient.invalidateQueries({ queryKey: [ADS_LIST_QUERY_KEY] });
        },
        onError: (e) => {
            serverErrorToastHandler(
                e,
                "Не удалось остановить выбранные объявления",
            );
        },
    });
};

export default useStopAdsMutation;
