import axios from "@/axios";
import { authTokenKey } from "@/constants";
import { Balance, Role, Transaction, User } from "@/types/api";

export type LoginData = Record<"phone" | "password", string>;

export type RegisterSendCodeData = Pick<User, "phone">;
export type RegisterVerifyCodeData = Pick<User, "phone"> & {
    code: string;
    role_id: number;
};
export type RegisterCompleteData = Pick<User, "name"> & {
    password: string;
    password_confirmation: string;
};

class AuthService {

    async login(data: LoginData) {
        const res = await axios.post<{
            user: User;
            token: string;
        }>("/login", data);

        localStorage.setItem(authTokenKey, res.data.token);

        return res.data;
    }

    async sendCode(data: RegisterSendCodeData) {
        const res = await axios.post<{ message: string }>(
            "/register/send-code",
            data,
        );

        return res.data;
    }

    async verifyCode(data: RegisterSendCodeData) {
        const res = await axios.post<{
            user: User,
            token: string;
        }>(
            "/register/verify-code",
            data,
        );

        localStorage.setItem(authTokenKey, res.data.token);

        return res.data;
    }

    async registerComplete(data: RegisterCompleteData) {
        const res = await axios.post<{
            user: Pick<User, "phone" | "name" | "is_configured">
        }>(
            "/register/complete",
            data,
        );

        return res.data;
    }
    

    async getSession() {
        const res = await axios.get<User>("/profile");

        return res.data;
    }
    async updateProfile(formData: FormData) {
        const res = await axios.post<User>("/profile", formData);

        return res.data;
    }
    async getTransactions() {
        const res = await axios.get<Transaction[]>("/transactions");

        return res.data;
    }
    async getBalance() {
        const res = await axios.get<Balance>("/balance");

        return res.data;
    }

    async getRoles() {
        const res = await axios.get<Role[]>("/roles");

        return res.data;
    }
}

export default AuthService;
