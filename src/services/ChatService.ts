import axios from "@/axios";
import { ChatStatusItem } from "@/types/api";

class ChatService {
    async getChatStatuses() {
        const res = await axios.get<ChatStatusItem[]>("/chat/status-list");

        return res.data;

    }
}

export default ChatService;