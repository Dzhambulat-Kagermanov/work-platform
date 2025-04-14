import { apiService } from "@/services";
import Ad from "@/types/api/Ad";
import { useQuery } from "@tanstack/react-query";

export const GET_ADV = (id: Ad["id"]) => ["adv", id];

export const useGetAdv = (id: Ad["id"]) => {
    return useQuery({
        queryKey: GET_ADV(id),
        queryFn: () => apiService.seller.getAd(id),
        retry: false,
    });
};
