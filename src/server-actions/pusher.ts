"use server";

import { pusherServer } from "@/utils/pusher-server";

export async function triggerPusherEvent(
    channel: string,
    event: string,
    data: any,
) {
    try {
        await pusherServer.trigger(channel, event, data);
        return { success: true };
    } catch (error) {
        console.error("Pusher trigger error:", error);
        throw new Error("Failed to trigger event");
    }
}
