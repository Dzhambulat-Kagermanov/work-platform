import { serverErrorToastHandler } from "@/handlers";
import { apiService } from "@/services";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { GET_CHAT_LIST_QUERY } from "../chat/useGetChatListQuery";

const useCreateOrderMutation = () => {

    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ["create-order"],
        mutationFn: async (id: number) => {
            const res = await apiService.orders.createOrder(id);

            return res;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [GET_CHAT_LIST_QUERY] });
            toast.success("Заказ успешно создан");
        },
        onError: (e) => {
            serverErrorToastHandler(e, "Не удалось создать заказ");
        },
    })
};

export default useCreateOrderMutation;