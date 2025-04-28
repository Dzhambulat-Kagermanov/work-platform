import { serverErrorToastHandler } from "@/handlers";
import { apiService } from "@/services";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { GET_CHAT_LIST_QUERY } from "../chat/useGetChatListQuery";
import useModalStore, { showModalSelector } from "@/store/useModalStore";
import { UNAUTHENTICATED_MODAL } from "@/constants";

const useCreateOrderMutation = () => {
    const queryClient = useQueryClient();
    const showModal = useModalStore(showModalSelector);

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
        onError: (e: any) => {
            // Check if it's an authentication error
            const isAuthError = e?.response?.data?.message === 'Unauthenticated';
            
            if (isAuthError) {
                // Only show the authentication modal without error toast
                showModal({ slug: UNAUTHENTICATED_MODAL });
            } else {
                // For other errors, show the error toast
                serverErrorToastHandler(e, "Не удалось создать заказ");
            }
        },
    });
};

export default useCreateOrderMutation;
