import axios from "@/axios";
import { Seller } from "@/types/api/User";
class UsersService {
    async getSellerById(id: string) {
        const res = await axios.get<Seller>(`/seller/${id}`);
        return res.data;
    }
}

export default UsersService;
