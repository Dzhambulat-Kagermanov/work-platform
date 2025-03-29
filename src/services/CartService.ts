import axios from "@/axios";
import Product from "@/types/api/Product";

export type AddToCartData = {
    product_id: number;
    quantity: number;
};

export type RemoveFromCartData = {
    product_id: number;
};

class CartService {
    async getCart() {
        const res = await axios.get<{ cart: Product[] }>("/cart");

        return res.data;
    }
    async addToCart(data: AddToCartData) {
        const res = await axios.post<{ ad: Product }>("/add-to-cart", data);

        return res;
    }
    async removeFromCart(data: RemoveFromCartData) {
        const res = await axios.post("/remove-from-cart", data);

        return res;
    }
}

export default CartService;
