import axios from "@/axios";
import { queryStringHandler } from "@/handlers";
import { ChatStatusItem } from "@/types/api";
import Chat from "@/types/api/Chat";
import { SendedMessage } from "@/types/api/Message";
import { QueryItem } from "@/types/client";

type ChatListItem = Chat;

class ChatService {
    async getChatList(query: QueryItem[]) {
        const res = await axios.get<ChatListItem[]>(
            `/chat-list${queryStringHandler(query)}`,
        );

        return res.data;
    }
    async getSalesmanChatList(query: QueryItem[]) {
        const res = await axios.get<ChatListItem[]>(
            `/buyer/orders${queryStringHandler(query)}`,
        );

        return res.data;
    }
    async getChatStatuses() {
        const res = await axios.get<ChatStatusItem[]>("/chat/status-list");

        return res.data;
    }
    async sendMessage({
        chatId,
        formData,
    }: {
        chatId: number;
        formData: FormData;
    }) {
        const res = await axios.post<SendedMessage>(
            `/chat/${chatId}/send`,
            formData,
        );

        return res;
    }
}

export default ChatService;
