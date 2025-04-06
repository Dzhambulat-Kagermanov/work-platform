import { PUSHER_CLUSTER, PUSHER_KEY } from "@/constants/pusher";
import Pusher from "pusher-js";

export const pusherClient = new Pusher(PUSHER_KEY, {
    cluster: PUSHER_CLUSTER,
});
export const chatPusherConfig = ({ userId }: { userId: number }) => ({
    channel: `chat-${userId}`,
    event: "MessageSent",
});
export const notificationsPusherConfig = ({ userId }: { userId: number }) => ({
    channel: `notification-${userId}`,
    event: "NotificationSent",
});
