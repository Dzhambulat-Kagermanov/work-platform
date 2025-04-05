import axios from "@/axios";
import { authTokenKey } from "@/constants";
import {
    Balance,
    ProfileStatistic,
    Role,
    Transaction,
    User,
} from "@/types/api";

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

export type UpdateProfileData = Partial<
    Pick<User, "name" | "phone" | "email"> & {
        password: string;
        password_confirmation: string;
    }
>;

export type OrderWithdrawalData = {
    amount: number;
    card_number: number;
};

export type UpdateProfileAvatarData = {
    avatar: File;
};

export type PasswordResetVerifyCodeData = Record<"phone" | "code", string>;
export type PasswordResetData = PasswordResetVerifyCodeData &
    Record<"password" | "password_confirmation", string>;

class AuthService {
    async login(data: LoginData) {
        const res = await axios.post<{
            user: User;
            token: string;
            message?: string;
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

    async verifyCode(data: RegisterVerifyCodeData) {
        const res = await axios.post<{
            user: User;
            token: string;
        }>("/register/verify-code", data);

        localStorage.setItem(authTokenKey, res.data.token);

        return res.data;
    }

    async registerComplete(data: RegisterCompleteData) {
        const res = await axios.post<{
            user: Pick<User, "phone" | "name" | "is_configured">;
        }>("/register/complete", data);

        return res.data;
    }

    async getSession() {
        const res = await axios.get<User>("/profile");

        return res.data;
    }
    async updateProfile(data: UpdateProfileData) {
        const formData = new FormData();

        for (const key in data) {
            //@ts-ignore
            const element = data[key];
            if (element) {
                formData.append(key, element);
            }
        }

        const res = await axios.post<User>("/profile", formData);

        return res.data;
    }

    async updateAvatar(data: UpdateProfileAvatarData) {
        const formData = new FormData();

        formData.append("avatar", data.avatar);

        const res = await axios.post("/profile/avatar", formData);

        return res.data;
    }
    async getBalance() {
        const res = await axios.get<Balance>("/balance");

        return res.data;
    }

    async orderWithdrawal(data: OrderWithdrawalData) {
        const res = await axios.post("/withdraw", data);

        return res.data;
    }

    async cancelWithdrawal(id: string) {
        const res = await axios.post(`/withdraw/${id}`);

        return res.data;
    }

    async getWithdraws() {
        const res = await axios.get("/withdraws");

        return res.data;
    }

    async getStatistic() {
        const res = await axios.get<ProfileStatistic>("/profile/statistic");

        return res.data;
    }

    async getRoles() {
        const res = await axios.get<Role[]>("/roles");

        return res.data;
    }
    async passwordResetSendCode(phone: string) {
        const res = await axios.post("/password/reset/send-code", {
            phone,
        });

        return res;
    }
    async passwordResetVerifyCode(data: PasswordResetVerifyCodeData) {
        const res = await axios.post("/password/reset/check-code", data);

        return res;
    }
    async passwordReset(data: PasswordResetData) {
        const res = await axios.post("/password/reset", data);

        return res;
    }
}

export default AuthService;
