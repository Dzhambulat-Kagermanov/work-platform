import { useMutation } from "@tanstack/react-query";

const useOrderSendMessageMutation = () => {
    return useMutation({
        mutationKey: ["order-send-message"],
        mutationFn: async () => {},
    });
};

export default useOrderSendMessageMutation;
