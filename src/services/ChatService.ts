import axios from "@/axios";
import { queryStringHandler } from "@/handlers";
import { ChatStatusItem } from "@/types/api";
import { QueryItem } from "@/types/client";

type ChatListItem = {
    id: number;
    ad_name: string;
    avatar: string | null;
    last_message: string;
    no_read_messages_count: number;
    online: boolean;
}

class ChatService {
    async getChatList(query: QueryItem[]) {
        const res = await axios.get<ChatListItem[]>(
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
