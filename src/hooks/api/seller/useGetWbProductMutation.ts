import { serverErrorToastHandler } from "@/handlers";
import { apiService } from "@/services";
import { AddWbProductData } from "@/services/SellerService";
import { useMutation } from "@tanstack/react-query";

const useGetWbProductMutation = () =>
    useMutation({
        mutationKey: ["wb-get-product"],
        mutationFn: async (data: AddWbProductData) => {
            const res = await apiService.seller.fetchWbProduct(data);

            return res;
        },
        onError: (e) => {
            serverErrorToastHandler(e, "Не удалось найти товар");
        },
    });

export default useGetWbProductMutation;
