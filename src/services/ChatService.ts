import axios from "@/axios";
import { queryStringHandler } from "@/handlers";
import { ChatStatusItem } from "@/types/api";
import { QueryItem } from "@/types/client";

class ChatService {
    async getChatList(query: QueryItem[]) {
        const res = await axios.get(
            `/buyer/orders${queryStringHandler(query)}`,
        );

        return res.data;
    }
    async getChatStatuses() {
        const res = await axios.get<ChatStatusItem[]>("/chat/status-list");

        return res.data;
    }
}

export default ChatService;
