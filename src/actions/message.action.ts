"use server";

import { pusherServer } from "@/lib/pusher";

export const sendMessage = async (message: string, chatId: number | string) => {
    try {
        pusherServer.trigger(`chat-${chatId}`, "MessageSent", {
            text: message,
        });
    } catch (error) {
        console.error(error);
    }
};
