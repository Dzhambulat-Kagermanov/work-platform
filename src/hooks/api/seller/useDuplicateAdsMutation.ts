import { apiService } from "@/services";
import { AdsIdsData } from "@/services/SellerService";
import { useMutation } from "@tanstack/react-query";

const useDuplicateAdsMutation = () =>
    useMutation({
        mutationKey: ["seller-duplicate-ads"],
        mutationFn: async (data: AdsIdsData) => {
            const res = await apiService.seller.duplicateAds(data);

            return res;
        },
    });

export default useDuplicateAdsMutation;
