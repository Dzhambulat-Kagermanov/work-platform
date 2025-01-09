import axios from "@/axios";
import Product from "@/types/api/Product";

export type AddToFavoriteData = {
    product_id: number;
}

export type RemoveFromFavoriteData = {
    product_id: number;
}

class FavoritesService {
    async getFavorites() {
        const res = await axios.get<{ favorites: Product[] }>("/favorites");

        return res.data;
    }
    async addToFavorites(data: AddToFavoriteData) {
        const res = await axios.post("/add-to-favorite", data);

        return res;
    }
    async removeFromFavorites(data: RemoveFromFavoriteData) {
        const res = await axios.post("/remove-from-favorite", data);

        return res;
    }
}

export default FavoritesService;