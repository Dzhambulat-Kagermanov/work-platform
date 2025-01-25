import { apiService } from "@/services";
import { useQuery } from "@tanstack/react-query";

const useGetChatStatusesQuery = () => {
    return useQuery({
        queryKey: ["chat-statuses"],
        queryFn: async () => {
            const res = await apiService.chat.getChatStatuses();

            return res;
        },
        staleTime: 90_000,
        retry: 3,
    });
};

export default useGetChatStatusesQuery;
