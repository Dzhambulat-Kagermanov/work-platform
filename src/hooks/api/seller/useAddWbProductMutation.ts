import { serverErrorToastHandler } from "@/handlers";
import { apiService } from "@/services";
import { AddWbProductData } from "@/services/SellerService";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const useAddWbProductMutation = () =>
    useMutation({
        mutationKey: ["wb-add-product"],
        mutationFn: async (data: AddWbProductData) => {
            const res = await apiService.seller.addWbProduct(data);

            return res;
        },
        onSuccess: () => {
            toast.success("Товар успешно добавлен");
        },
        onError: (e) => {
            serverErrorToastHandler(e, "Не удалось добавить товар");
        },
    });

export default useAddWbProductMutation;
