import axios from "@/axios";
import { User } from "@/types/api";
class AuthService {
    async getSession() {
        const res = await axios.get<User>("/profile");

        return res.data;
    }
}

export default AuthService;
