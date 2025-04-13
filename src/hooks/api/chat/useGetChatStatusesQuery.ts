import { apiService } from "@/services";
import { useQuery } from "@tanstack/react-query";

export const GET_CHAT_STATUSES_KEY = ["chat-statuses"];

const useGetChatStatusesQuery = () => {
    return useQuery({
        queryKey: GET_CHAT_STATUSES_KEY,
        queryFn: async () => {
            const res = await apiService.chat.getChatStatuses();

            return res;
        },
        staleTime: 90_000,
        retry: 3,
    });
};

export default useGetChatStatusesQuery;
