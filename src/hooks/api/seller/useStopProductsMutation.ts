import { serverErrorToastHandler } from "@/handlers";
import { apiService } from "@/services";
import { AdsIdsData, ProductIdsData } from "@/services/SellerService";
import { useSellerStore } from "@/store";
import { resetProductIdsSelector } from "@/store/useSellerStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { SELLER_PRODUCTS_QUERY_KEY } from "./useGetSellerProductsQuery";

const useStopProductsMutation = () => {
    const resetProductIds = useSellerStore(resetProductIdsSelector);
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ["seller-stop-products"],
        mutationFn: async (data: ProductIdsData) => {
            const res = await apiService.seller.stopProducts(data);

            return res;
        },
        onSuccess: () => {
            toast.success("Продукты успешно остановлены");
            resetProductIds();
            queryClient.invalidateQueries({
                queryKey: [SELLER_PRODUCTS_QUERY_KEY],
            });
        },
        onError: (e) => {
            serverErrorToastHandler(
                e,
                "Не удалось остановить выбранные продукты",
            );
        },
    });
};

export default useStopProductsMutation;
