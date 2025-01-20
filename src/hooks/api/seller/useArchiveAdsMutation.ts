import { apiService } from "@/services";
import { AdsIdsData } from "@/services/SellerService";
import { useMutation } from "@tanstack/react-query";

const useArchiveAdsMutation = () =>
    useMutation({
        mutationKey: ["seller-archive-ads"],
        mutationFn: async (data: AdsIdsData) => {
            const res = await apiService.seller.archiveAds(data);

            return res;
        },
    });

export default useArchiveAdsMutation;
