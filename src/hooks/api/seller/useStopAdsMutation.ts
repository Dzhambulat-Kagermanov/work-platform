import { apiService } from "@/services";
import { AdsIdsData } from "@/services/SellerService";
import { useMutation } from "@tanstack/react-query";

const useStopAdsMutation = () =>
    useMutation({
        mutationKey: ["seller-stop-ads"],
        mutationFn: async (data: AdsIdsData) => {
            const res = await apiService.seller.stopAds(data);

            return res;
        },
    });

export default useStopAdsMutation;
