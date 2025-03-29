import { useMutation } from "@tanstack/react-query";
import { apiService } from "@/services";
import { AddToCartData } from "@/services/CartService";
import { serverErrorToastHandler } from "@/handlers";
const useCartAddMutation = () => {
    return useMutation({
        mutationKey: ["cart-add"],
        mutationFn: async (data: AddToCartData) => {
            const res = await apiService.cart.addToCart(data);

            return res;
        },
        onError: (e) => {
            serverErrorToastHandler(e, "Не удалось добавить товар в корзину");
        },
    });
};

export default useCartAddMutation;
