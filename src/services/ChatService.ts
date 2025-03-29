import axios from "@/axios";
import { queryStringHandler } from "@/handlers";
import { ChatStatusItem, Shop, User } from "@/types/api";
import Chat from "@/types/api/Chat";
import { WbProduct } from "@/types/api/Product";
import { QueryItem } from "@/types/client";

type ChatListItem = Chat;

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
