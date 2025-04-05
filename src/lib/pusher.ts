import Pusher from "pusher-js";

export const pusherClient = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY!, {
    cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER!,
    authEndpoint: "/api/pusher/auth", // App Router автоматически обрабатывает маршрут
    auth: {
        headers: {
            "Content-Type": "application/json",
        },
    },
});

export const chatPusherConfig = ({ userId }: { userId: number }) => ({
    channel: `notification-${userId}`,
    event: "NotificationSent",
});
export const notificationsPusherConfig = ({ userId }: { userId: number }) => ({
    channel: `notification-${userId}`,
    event: "NotificationSent",
});
