import { useMutation } from "@tanstack/react-query";
import { apiService } from "@/services";
import { AddToCartData } from "@/services/CartService";
const useCartAddMutation = () => {
    return useMutation({
        mutationKey: ["cart-add"],
        mutationFn: async (data: AddToCartData) => {
            const res = await apiService.cart.addToCart(data);

            return res;
        },
    });
};

export default useCartAddMutation;
