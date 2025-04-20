import { apiService } from "@/services";
import { useMutation } from "@tanstack/react-query";

export const useReferralLink = () =>
    useMutation({
        mutationFn: apiService.seller.referralLink,
    });
