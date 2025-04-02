import { apiService } from "@/services";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { GET_ORDER_KEY } from "../orders/useGetOrderQuery";

const useSendMessageMutation = (chatId?: number) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ["order-send-message"],
        mutationFn: apiService.chat.sendMessage,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: GET_ORDER_KEY(chatId) });
        },
    });
};

export default useSendMessageMutation;
