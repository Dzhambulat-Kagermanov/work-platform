import { serverErrorToastHandler } from "@/handlers";
import { apiService } from "@/services";
import { ProductIdsData } from "@/services/SellerService";
import { useSellerStore } from "@/store";
import { resetAdIdsSelector } from "@/store/useSellerStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { SELLER_PRODUCTS_QUERY_KEY } from "./useGetSellerProductsQuery";

const useArchiveProductsMutation = () => {
    const resetAdIds = useSellerStore(resetAdIdsSelector);
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ["seller-archive-products"],
        mutationFn: async (data: ProductIdsData) => {
            const res = await apiService.seller.archiveProducts(data);

            return res;
        },
        onSuccess: () => {
            toast.success("Продукты успешно архивированы");
            resetAdIds();
            queryClient.invalidateQueries({
                queryKey: [SELLER_PRODUCTS_QUERY_KEY],
            });
        },
        onError: (e) => {
            serverErrorToastHandler(e, "Не удалось архивировать продукты");
        },
    });
};

export default useArchiveProductsMutation;
