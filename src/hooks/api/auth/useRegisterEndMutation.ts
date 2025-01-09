import { useMutation } from "@tanstack/react-query";

const useRegisterEndMutation = () => (
    useMutation({
        mutationKey: ["auth-register-end"],
        mutationFn: async () => {

        }
    })
);

export default useRegisterEndMutation;