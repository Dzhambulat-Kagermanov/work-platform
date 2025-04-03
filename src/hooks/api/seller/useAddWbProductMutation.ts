import { ROUTES } from "@/constants";
import { serverErrorToastHandler } from "@/handlers";
import { apiService } from "@/services";
import { AddWbProductData } from "@/services/SellerService";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const useAddWbProductMutation = () =>
{

    const router = useRouter();

    return useMutation({
        mutationKey: ["wb-add-product"],
        mutationFn: async (data: AddWbProductData) => {
            const res = await apiService.seller.addWbProduct(data);

            return res;
        },
        onSuccess: (res) => {
            if (!res.has_products) {
                router.push(`${ROUTES.SALESMAN.CREATE_ADVERTISEMENTS}?selectedWbItem=${res.product.id}`)
            }
            toast.success("Товар успешно добавлен");
        },
        onError: (e) => {
            serverErrorToastHandler(e, "Не удалось добавить товар");
        },
    });
}

export default useAddWbProductMutation;
