import { useMutation } from "@tanstack/react-query";

const useRegisterVerifyCodeMutation = () => (
    useMutation({
        mutationKey: ["auth-verify-code"],
        mutationFn: async () => {
            
        }
    })
);

export default useRegisterVerifyCodeMutation;