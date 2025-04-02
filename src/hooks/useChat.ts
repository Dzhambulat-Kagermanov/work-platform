import { SendedMessage } from "@/types/api/Message";
import { create } from "zustand";

interface Props {
    messages: SendedMessage[];
}

export const useChat = create<Props>()((set, get) => ({
    messages: [],
}));
