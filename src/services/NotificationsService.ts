import axios from "@/axios";
import { TNotificationItemProps } from "@/types";

export class NotificationsService {
    async getNotifications() {
        const res = await axios.get<TNotificationItemProps[]>("/notifications");
        return res.data;
    }
}
