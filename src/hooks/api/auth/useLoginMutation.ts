import { useMutation } from "@tanstack/react-query";
import axios from "@/axios";

type LoginData = Record<'phone' | 'password', string>;

const useLoginMutation = () => (
    useMutation({
        mutationKey: ["auth-login"],
        mutationFn: async (data: LoginData) => {
            const res = await axios.post("/login", data);

            return res.data;
        }
    })
);

export default useLoginMutation;