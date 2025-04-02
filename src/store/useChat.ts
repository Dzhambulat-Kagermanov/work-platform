import { create } from "zustand";

interface Props {
    sendMessage?: string;
    sendFile?: Blob;

    setSendMessage: (message: string) => void;
}

export const useChat = create<Props>()((set, get) => ({
    setSendMessage: (message) => {
        set({
            sendMessage: message,
        });
    },
}));
