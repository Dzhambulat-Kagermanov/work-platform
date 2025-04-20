import axios from "@/axios";
import User, { Seller } from "@/types/api/User";
class UsersService {
    async getSellerById(id: string) {
        const res = await axios.get<Seller>(`/seller/${id}`);
        return res.data;
    }
    async getBuyerById(id: string) {
        const res = await axios.get<User>(`/buyer/${id}`);
        return res.data;
    }

    async getTelegramLink() {
        const res = await axios.get<{ link: string }>(`/get-telegram-link`);
        return res.data;
    }
}

export default UsersService;
