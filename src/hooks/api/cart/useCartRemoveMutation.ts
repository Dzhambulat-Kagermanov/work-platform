import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiService } from "@/services";
import { RemoveFromCartData } from "@/services/CartService";
import Product from "@/types/api/Product";
import { getCartKey } from "./useGetCartQuery";
import toast from "react-hot-toast";
const useFavoritesRemoveMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ["cart-remove"],
        mutationFn: async (data: RemoveFromCartData) => {
            const res = await apiService.cart.removeFromCart(data);

            return {
                res,
                req: data,
            };
        },
        onSuccess: (data) => {
            if (data.res.status !== 200) {
                return;
            }

            const oldData = queryClient.getQueryData<Product[]>(getCartKey);

            if (!oldData) {
                return;
            }

            queryClient.setQueryData(
                getCartKey,
                oldData.filter((el) => el.id !== data.req.product_id),
            );

            toast.success("Товар успешно убран из корзины");
        },
    });
};

export default useFavoritesRemoveMutation;
