import { User } from "@/types/api";
import { useMutation } from "@tanstack/react-query";
import axios from "@/axios";

type RegisterSendCodeData = Pick<User, 'phone'>;

const useRegisterSendCode = () => (
    useMutation({
        mutationKey: ["register-send-code"],
        mutationFn: async (data: RegisterSendCodeData) => {
            const res = await axios.post<{ message: string }>("/register/send-code", data);

            return res.data;
        }
    })
);

export default useRegisterSendCode;