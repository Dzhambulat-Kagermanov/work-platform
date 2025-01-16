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
    });

export default useGetWbProductMutation;
