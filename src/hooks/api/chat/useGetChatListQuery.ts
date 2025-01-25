import { apiService } from "@/services";
import { QueryItem } from "@/types/client";
import { useQuery } from "@tanstack/react-query";

export const GET_CHAT_LIST_QUERY = "chat-list-query";

const useGetChatListQuery = (query: QueryItem[]) => (
    useQuery({
        queryKey: [GET_CHAT_LIST_QUERY, query],
        queryFn: async () => {
            const res = await apiService.chat.getChatList(query);
            return res;
        },
        staleTime: 45_000,
        retry: 3,
    })
);

export default useGetChatListQuery;